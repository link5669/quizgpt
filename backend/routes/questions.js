import express from 'express'
const router = express.Router();

const questions = [
    {
        'id': 1,
        'question': 'What color is the sky?',
        'options': ['red', 'green', 'blue', 'purple'],
        'correct_answer': 'blue',
    }
]
  
router.get('/', (req, res) => {
    res.json({success: true, data: questions});
});
export default router