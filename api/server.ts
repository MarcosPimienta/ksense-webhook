import express from "express";

const app = express();
app.use(express.json());

app.post("/webhook", (req, res) => {
  console.log("Received payload:", req.body);

  // Extract and store secret code from payload
  if (req.body.secret) {
      console.log("Secret Code:", req.body.secret);
  }
  res.status(200).send("Webhook received!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});