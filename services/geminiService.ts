import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

if (process.env.API_KEY) {
  aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const generateGamblingTip = async (): Promise<string> => {
  if (!aiClient) return "AI System Offline. Check API Key configuration.";

  try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a short, futuristic, cryptic but helpful tip for a crypto casino player about bankroll management or game volatility. Keep it under 20 words. Style: Cyberpunk AI.",
    });
    return response.text || "Stay calculated. Variance is the only constant.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Connection interrupted. Rely on your instincts.";
  }
};

export const analyzeGameStrategy = async (gameName: string): Promise<string> => {
   if (!aiClient) return "System Offline.";

   try {
    const response = await aiClient.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Provide a quick strategic insight for the casino game '${gameName}'. Focus on RTP and risk. Max 50 words.`,
    });
    return response.text || "Analyze the RTP before committing credits.";
   } catch (error) {
     return "Strategy database unreachable.";
   }
}