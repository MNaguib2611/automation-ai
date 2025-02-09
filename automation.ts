import chokidar from 'chokidar';
import chalk from 'chalk';
import * as dotenv from 'dotenv';
import {
  runLintOnAllFiles,
  addCodeComments,
  generateTests,
} from './automation_utils';

// Initialize environment variables from .env file
dotenv.config();

// ========================
// File Watcher Setup
// ========================
const watcher = chokidar.watch('./src', {
  ignored: [
    /node_modules|\.spec\.ts$/,
    (path, stats) => stats?.isFile() && !path.endsWith('.ts'),
  ],
  persistent: true,
  ignoreInitial: true,
  depth: 99, // Scan nested directories
});

// Add debug logging:
watcher
  .on('ready', () => console.log(chalk.green('Watcher is active')))
  .on('add', (path) => console.log(chalk.blue('Watching file:', path)))
  .on('error', (error) => console.log(chalk.red('Watcher error:', error)));

const fileChangeTimestamps = new Map<string, number>();

watcher.on('change', (filePath) => {
  const now = Date.now();
  const lastChange = fileChangeTimestamps.get(filePath) || 0;

  // Ignore changes within 20 seconds of the last modification
  if (now - lastChange < 20000) return;
  console.log(chalk.red(`now - lastChange: ${now - lastChange}`));

  fileChangeTimestamps.set(filePath, now);
  console.log(chalk.yellow(`\nDetected changes in: ${filePath}`));
  runAutomationPipeline(filePath);
});

// ========================
// Main Pipeline
// ========================
async function runAutomationPipeline(filePath: string) {
  try {
    console.log(chalk.cyan('\nStarting automation pipeline....'));

    // 1. Add code comments
    if (process.env.GENERATE_COMMENTS === 'true') {
      console.log(chalk.cyan('\nStarting generating comments...'));
      await addCodeComments(filePath);
    }

    // 2. Generate tests
    if (process.env.GENERATE_TESTS === 'true') {
      console.log(chalk.cyan('\nStarting generating tests...'));
      await generateTests(filePath);
    }

    // 3. Lint all the project ts files
    runLintOnAllFiles();

    console.log(chalk.green('Automation completed successfully!'));
  } catch (error) {
    console.error(chalk.red('Pipeline failed:', error));
    process.exit(1);
  }
}

// Start watching for changes
console.log(
  chalk.magenta('🚀 Automation watcher started. Monitoring src/ directory...'),
);
