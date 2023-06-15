import express from 'express'
import fetchQuestions from "../GPT/getFormattedQuestions.js";

const router = express.Router();
const topic = "Boston";
const numQuestions = 5;
let questions = null;

(async () => {
    try {
      questions = await fetchQuestions(topic, numQuestions);
      console.log("got questions!");
    } catch (error) {
      console.error(error);
    }
  })();

router.get('/', (req, res) => {
    console.log("fetching /")
    console.log(questions != null)
    if (questions != null) {
        res.json({success: true, data: questions});
    } else {
        res.json({success: true, data: "loading!"});
    } 
});

export default router