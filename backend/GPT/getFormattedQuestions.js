import getGPTData from "./chat.js";

const fetchQuestions = async (topic, numQuestions, difficulty) => {
  const response = await getGPTData(topic, numQuestions, difficulty);
  return parseData(response);
};

function parseData(text) {
  console.log(text)
  const parsedQuestions = [];
  const questions = text.split("\n\n");
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i].split("\n");
    const parsedQuestion = {
      question: question[0].substring(question[0].indexOf(".") + 2),
      answers: {
        A: question[1].substring(3),
        B: question[2].substring(3),
        C: question[3].substring(3),
        D: question[4].substring(3),
      },
      correctAnswer: question[5].substring(question[5].indexOf(" ") + 1),
    };
    for (let i = 0; i < ["a)", "b)", "c)", "d)"].length; i++) {
      if (parsedQuestion.correctAnswer.includes(["a)", "b)", "c)", "d)"][i])) {
        parsedQuestion.correctAnswer = i;
        break;
      }
    }
    parsedQuestions.push(parsedQuestion);
  }
  return JSON.stringify(parsedQuestions);
}

export default fetchQuestions;
