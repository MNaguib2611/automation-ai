import * as fs from 'fs/promises';
import * as path from 'path';
import { getAIResponse } from './getAIResponse';
import chalk from 'chalk';

export const generateTests = async (filePath: string) => {
  const code = await fs.readFile(filePath, 'utf-8');
  const testPrompt = `
    Generate a very simple unit tests for this TypeScript code.
    Use describe/it blocks and include edge cases.
    Return ONLY the test code, no explanations.
    make sure to add the necessary imports and setup code.
    Code: ${code}
  `;

  const testCode = await getAIResponse(testPrompt);

  // Generate test path in the same directory as the input file
  const testFilePath = filePath.replace('.ts', '.spec.ts');

  await fs.mkdir(path.dirname(testFilePath), { recursive: true });
  await fs.writeFile(
    testFilePath,
    `/* eslint-disable @typescript-eslint/no-unused-vars */ \n${testCode.split('```')[0]}`,
  );
  console.log(chalk.green(`Generated tests at: ${testFilePath}`));
};
