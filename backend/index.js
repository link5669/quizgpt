import fetchQuestions from "./GPT/getFormattedQuestions.js";
import express from 'express'
import questionsRouter from './routes/questions.js'
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Quizify API'});
});


app.use('/api/questions', questionsRouter)
app.listen(port, () => console.log(`Server listening on port ${port}`))

const topic = "Boston";
const numQuestions = 5;

fetchQuestions(topic, numQuestions)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
