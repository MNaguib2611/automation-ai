// automation.ts (located in project root)
import chokidar from 'chokidar';
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
  ], // Ignore tests and node_modules
  persistent: true,
  ignoreInitial: true,
  depth: 99, // Scan nested directories
});

// Add debug logging:
watcher
  .on('ready', () => console.log('Watcher is active'))
  .on('add', (path) => console.log('Watching file:', path))
  .on('error', (error) => console.log('Watcher error:', error));

const fileChangeTimestamps = new Map<string, number>();

watcher.on('change', (filePath) => {
  const now = Date.now();
  const lastChange = fileChangeTimestamps.get(filePath) || 0;

  // Ignore changes within 2 seconds of the last modification
  if (now - lastChange < 10000) return;

  fileChangeTimestamps.set(filePath, now);
  console.log(`\nDetected changes in: ${filePath}`);
  runAutomationPipeline(filePath);
});

// ========================
// Main Pipeline
// ========================
async function runAutomationPipeline(filePath: string) {
  try {
    console.log('\nStarting automation pipeline...');

    // 1. Add code comments
    if (process.env.GENERATE_COMMENTS === 'true') {
      console.log('\nStarting generating comments...');
      await addCodeComments(filePath);
    }

    // 2. Generate tests
    if (process.env.GENERATE_TESTS === 'true') {
      console.log('\nStarting generating tests...');
      await generateTests(filePath);
    }

    // 3. Lint all the project ts files
    runLintOnAllFiles();

    console.log('Automation completed successfully!');
  } catch (error) {
    console.error('Pipeline failed:', error);
    process.exit(1);
  }
}

// Start watching for changes
console.log('🚀 Automation watcher started. Monitoring src/ directory...');
