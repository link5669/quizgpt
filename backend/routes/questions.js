import express from 'express'
import fetchQuestions from "../GPT/getFormattedQuestions.js";

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const { topic, numQuestions } = req.query;
        console.log(topic)
        const questions = await fetchQuestions(topic, numQuestions);
        res.json({success: true, data: JSON.parse(questions)});
    } catch {
        res.status(500).send('Error occurred while fetching data from the API');
    }
});

export default router