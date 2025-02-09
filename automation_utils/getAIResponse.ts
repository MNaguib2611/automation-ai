import axios from 'axios';
export const getAIResponse = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      'http://localhost:1234/v1/chat/completions',
      {
        model: 'llama-3.2-3b-instruct', // Set in LM Studio
        messages: [{ role: 'user', content: prompt }],
      },
    );

    return response.data?.choices[0]?.message?.content
      ?.replace(/^```(typescript)?\n/, '')
      ?.replace(/^```(javascript)?\n/, '')
      .replace(/\n```$/, '');
  } catch (error) {
    console.error('AI request failed:', error);
    throw error;
  }
};
