/* eslint-disable @typescript-eslint/no-unused-vars */
import { createMergeRequest, commitChanges } from './automation_utils';
import * as dotenv from 'dotenv';
import chalk from 'chalk';

// Initialize environment variables from .env file
dotenv.config();

// 4. Git commit
if (process.env.COMMIT_CHANGES === 'true') {
  console.log(chalk.cyan('\nStarting committing changes...'));
  commitChanges();
  console.log(chalk.green('\n changes has been committed...'));
}

// 5. Create MR (ensure you're on a feature branch)
if (process.env.MERGE_REQUEST === 'true') {
  console.log(chalk.cyan('\nStarting merge request...'));
  createMergeRequest();
}
