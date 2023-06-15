import express from 'express'
import fetchQuestions from "../GPT/getFormattedQuestions.js";
const router = express.Router();
const topic = "Boston";
const numQuestions = 5;
let questions;
fetchQuestions(topic, numQuestions)
.then((response) => {
  questions = response;
  console.log(response);
})
.catch((error) => {
  console.error(error);
});

router.get('/', (req, res) => {
    res.json({success: true, data: questions});
});
export default router