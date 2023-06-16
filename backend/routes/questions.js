import express from "express";
import fetchQuestions from "../GPT/getFormattedQuestions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  if (!(req.query.topic && req.query.numQuestions && req.query.difficulty)) {
    res.status(400).send("Missing parameters")
  } else {
    try {
      const { topic, numQuestions, difficulty } = req.query;
      const questions = await fetchQuestions(topic, numQuestions, difficulty);
      res.json({ success: true, data: JSON.parse(questions) });
    } catch {
      res.status(500).send("Error occurred while fetching data from the API");
    }
  }
}); 

export default router;
