import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  // API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      if (!process.env.GROQ_API_KEY) {
        return res.status(500).json({ error: "GROQ_API_KEY is not configured" });
      }

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: "You are Astrateq Sentinel, the warm and empathetic AI assistant for Astrateq Gadgets. Your primary mission is to provide peace of mind to Canadian families who care deeply about their loved ones' safety on the road. You understand the quiet anxiety caregivers feel when a parent or spouse drives alone, especially during our harsh Canadian winters. Your tone is deeply reassuring, professional, and kind—never alarmist. You emphasize that ASTRA-AI is about supporting independence, not taking it away. It's a proactive safety co-pilot that helps families stay connected quietly and respectfully. Key facts to share when relevant: Guardian Mode (predictive AI monitoring), 94% predictive accuracy for risks 3-6 weeks in advance, PIPEDA compliance (data stays in Canada), and the $329 CAD pre-launch price for DriveGuard. You are based in Toronto, Ontario. Use Canadian spelling and maintain a supportive, caregiver-first perspective."
          },
          ...messages
        ],
        model: "llama-3.3-70b-versatile",
      });

      res.json({ message: completion.choices[0]?.message?.content || "" });
    } catch (error) {
      console.error("Groq API error:", error);
      res.status(500).json({ error: "Failed to communicate with AI" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
