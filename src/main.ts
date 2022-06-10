import express from "express";
import type { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/api/:string", (req: Request, res: Response) => {
  res.send({ text: `Express received ${req.params.string}` });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
