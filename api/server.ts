import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("📥 Received payload:");
  console.log(JSON.stringify(req.body, null, 2));

  res.status(200).send("Webhook received!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
