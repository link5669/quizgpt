import express from "express";
import fetchQuestions from "../GPT/getFormattedQuestions.js"
import { writeQuestions } from "../scores/firebase.js";

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
        const { topic, numQuestions, difficulty, useGPT4 } = req.query;
        console.log(useGPT4,typeof(useGPT4))
        var gpt = (useGPT4 === 'true')
        console.log(gpt,typeof(gpt))
        const modelType = gpt ? 'gpt4' : 'gpt35turbo';
        console.log(modelType)
        const questions = await fetchQuestions(topic, numQuestions, difficulty, modelType)
        writeQuestions(topic, JSON.parse(questions))
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