import genAI from "../config/Gemini";

export const analyzeMoodWithGemini = async (promptText: string) => {

  const prompt = `
Act as a professional psychologist analyzing diary entries.
For this entry: "${promptText}"

1. Identify maximum 4 minimum 2 primary moods from: [happy, sad, neutral, excited] add another tag if you want that is short
2. Generate a 3-6 word title capturing the essence
3. Confidence score for based on mood from[0-10] 

Respond with JSON format:
{
  "title": "",
  "moods":["",""],
  "score:0
}`;

  const response = await genAI.models.generateContent({
      model:'gemini-2.0-flash',
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      config: { responseMimeType: 'application/json' }
    });
    
  console.log(response);
  // Parse the structured JSON output
  let parsed = null;
try {
  parsed = response.text ? JSON.parse(response.text) : null;
  return parsed;
} catch (error) {
  console.error("Error parsing JSON response:", error);
  throw new Error("Invalid JSON response from API");
}
};
