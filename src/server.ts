import express, { Request, Response } from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
app.use(express.json());

app.post("/webhook", (req: Request, res: Response) => {
    console.log("Received payload:", req.body);

    if (req.body.secret) {
        console.log("Secret Code:", req.body.secret);
    }

    res.status(200).json({ message: "Webhook received!" });
});

// Export the handler for Vercel
export default (req: VercelRequest, res: VercelResponse) => app(req, res);
