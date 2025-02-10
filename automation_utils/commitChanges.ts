import simpleGit from 'simple-git';
const git = simpleGit();
import { getAIResponse } from './getAIResponse';
import chalk from 'chalk';

export const commitChanges = async (): Promise<string> => {
  try {
    await git.add('.');
    // await git.add('./src');

    // Get the diff of the changes
    const diff = await git.diff(['--staged']);
    // console.info(chalk.blue('diff------:', diff));

    // Generate commit message
    const commitPrompt = `
      Create a concise Git commit message (max 50 characters)
      for the following changes :
      ${diff}
      Focus on the main purpose of the changes.
      Return ONLY the commit message, no explanations or extra text.
    `;

    const commitMessage = (await getAIResponse(commitPrompt)).trim();
    await git.commit(commitMessage);
    console.log(chalk.green(`Committed changes: "${commitMessage}"`));
    return commitMessage;
  } catch (error) {
    console.error(chalk.red('Git operations failed:', error));
    throw error;
  }
};
