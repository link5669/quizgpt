import express from "express";
import fetchQuestions from "../GPT/getFormattedQuestions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  console.log(req.rawHeaders[req.rawHeaders.indexOf("Authorization") + 1])
  if (req.rawHeaders[req.rawHeaders.indexOf("Authorization") + 1].split(" ")[1] == "8v8an328v8bde17cabc7vnwe2n4kj") {
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
    res.status(401).send("Unauthorized")
  }
}); 

export default router;
