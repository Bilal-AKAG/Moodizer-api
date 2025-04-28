import { GoogleGenAI } from "@google/genai";
import { ENV } from "./env";

const genAI = new GoogleGenAI({ apiKey: ENV.GEMINI_API_KEY });

export default genAI;
