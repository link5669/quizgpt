const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the Quizify API'});
});

const questionsRouter = require('./routes/questions')
app.use('/api/questions', questionsRouter)
app.listen(port, () => console.log(`Server listening on port ${port}`))