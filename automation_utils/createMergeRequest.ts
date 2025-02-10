import { getAIResponse } from './getAIResponse';
import * as dotenv from 'dotenv';
import simpleGit from 'simple-git';
const git = simpleGit();
import { execSync } from 'child_process';
import chalk from 'chalk';

dotenv.config();

interface GitHubPullRequestResponse {
  html_url: string;
  number: number;
  title: string;
  state: string;
  merged: boolean;
}

export const createMergeRequest = async () => {
  // Get the last commit message
  const log = await git.log();
  const latestCommitMessage = log.latest?.message;

  // Get the current branch name
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD')
    .toString()
    .trim();

  // Push the current branch
  await git.push('origin', currentBranch);

  // Check if there is already a merge request between the current branch and main
  const checkMergeRequestUrl = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/pulls?head=${process.env.GITHUB_OWNER}:${currentBranch}&base=main`;
  const checkResponse = await fetch(checkMergeRequestUrl, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
    },
  });

  const existingMergeRequests = await checkResponse.json();
  if (existingMergeRequests.length > 0) {
    console.log(
      chalk.yellow(
        `Merge request already exists for branch ${currentBranch} to main.Stopped after pushing code changes`,
      ),
    );
    return;
  }

  // Generate Merge Request Message values
  const MergeRequestPrompt = `
      Create a concise merge request description
      based on the following commit message:
      "${latestCommitMessage}"
    `;

  const MergeRequestMessage = (await getAIResponse(MergeRequestPrompt)).trim();

  const params = {
    owner: process.env.GITHUB_OWNER,
    repo: process.env.GITHUB_REPO,
    title: MergeRequestMessage,
    head: currentBranch,
    base: 'main',
    description: MergeRequestMessage,
    token: process.env.GITHUB_TOKEN,
  };
  const apiUrl = `https://api.github.com/repos/${params.owner}/${params.repo}/pulls`;

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: 'application/vnd.github+json',
    'Content-Type': 'application/json',
  };

  const body = {
    title: params.title,
    head: params.head,
    base: params.base,
    body: params.description,
  };

  try {
    const response: any = await fetch(apiUrl, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(
        `Failed to create merge request: ${response.statusText} from branch ${currentBranch} to branch main`,
      );
    } else {
      console.log(chalk.green(`Created merge request : ${params.title}`));
    }

    const data = (await response.json()) as GitHubPullRequestResponse;
    return data;
  } catch (error) {
    throw new Error(
      `Error creating merge request: ${(error as Error).message}`,
    );
  }
};
