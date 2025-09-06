import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors()); // if you will call it cross-origin in prod, this is fine
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body as {
      messages: Array<{ role: "system" | "user" | "assistant"; content: string }>;
    };

    if (!Array.isArray(messages)) {
      return res.status(400).json({ error: "messages must be an array" });
    }

    const resp = await client.responses.create({
      model: "gpt-4o-mini",
      input: messages,
    });

    res.json({ reply: resp.output_text });
  } catch (e: any) {
    console.error("OpenAI error:", e?.message || e);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

const PORT = Number(process.env.PORT) || 5174;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
