import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req: Request, res: Response) => {
  console.log("📥 Received payload:");
  console.log(JSON.stringify(req.body, null, 2));

  // Extract and store the secret code if it exists
  const payload = req.body;
  if (payload) {
    console.log("🔑 Secret Code:", payload);
  }

  res.status(200).send("Webhook received!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
