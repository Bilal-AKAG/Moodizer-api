import { GoogleGenAI } from '@google/genai';

const apiKey = 'AIzaSyChEhOZpc4jjc10NHtAcnozMDzNkh0dkfQ'; // Replace with your actual API key
const genAI = new GoogleGenAI({ apiKey });

async function testGemini() {
  try {
    const response = await genAI.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: 'Write a short sentence.' }] }],
    });

    if (response?.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.log('Generated Text:', response.candidates[0].content.parts[0].text);
    } else {
      console.error('No valid response received:', response);
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
  }
}

testGemini();