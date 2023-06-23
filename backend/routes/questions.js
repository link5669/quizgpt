import express from "express";
import fetchQuestions from "../GPT/getFormattedQuestions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  var allowedOrigin = false
  Object.entries(req).forEach(element => {
    if (element[0] == 'rawHeaders') {
      const originString = element[1][element[1].indexOf("Host") + 1]
      if (originString.includes("quizify") || originString.includes("localhost") || originString.includes("azure")) {
        allowedOrigin = true
      }
    }
  })
  if (allowedOrigin) {
    if (!(req.query.topic && req.query.numQuestions && req.query.difficulty)) {
      res.status(400).send("Missing parameters")
    } else {
      try {
        const { topic, numQuestions, difficulty } = req.query;
        const questions = await fetchQuestions(topic, numQuestions, difficulty);
        res.json(JSON.parse(questions));
      } catch {
        res.status(500).send("Error occurred while fetching data from the API");
      }
    }
  } else {
    res.status(502).send("Unauthorized")
  }
}); 

export default router;