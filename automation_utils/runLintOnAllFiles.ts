import { execSync } from 'child_process';

export const runLintOnAllFiles = () => {
  try {
    execSync('npx eslint . --ext .ts,.tsx --fix', {
      stdio: 'inherit',
    });
  } catch (error) {
    console.error(`Error executing lint: ${error.message}`);
    throw error;
  }
};
