import * as fs from 'fs/promises';
import { getAIResponse } from './getAIResponse';
import chalk from 'chalk';

export const addCodeComments = async (filePath: string) => {
  const code = await fs.readFile(filePath, 'utf-8');
  const prompt = `
        You are an expert TypeScript developer.
        Add JSDoc-style comments before every function in the following TypeScript code.
        Ensure the comments are meaningful and describe each function's purpose.
        Return ONLY the modified code, no explanations or extra text.

        Code:
        \`\`\`typescript
        ${code}
        \`\`\`
        `;
  const modifiedCode = await getAIResponse(prompt);
  await fs.writeFile(filePath, modifiedCode);
  console.log(chalk.green(`Added comments to: ${filePath}`));
};
