import express from "express";
import questionsRouter from "./routes/questions.js";
import scoresRouter from "./routes/scores.js"
import cors from "cors";

const port = process.env.PORT || 5000;
const app = express();

const corsConfig = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsConfig));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Quizify API" });
});

app.use("/api/questions", questionsRouter);
app.use("/api/scores", scoresRouter);
app.listen(port, () => console.log(`Server listening on port ${port}`));