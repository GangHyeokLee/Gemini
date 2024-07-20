import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_APP_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const requestToGemini = async (prompt: string) => {

  const result = await model.generateContent(prompt);

  const response = await result.response
  const text = response.text();
  console.log(text);

  return text;
}