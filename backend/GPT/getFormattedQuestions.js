import getGPTData from "./chat.js"

const fetchQuestions = async (topic, numQuestions) => {
  const response = await getGPTData(topic, numQuestions);
  return parseData(response)
}

function parseData(text) {
    const parsedQuestions = []
    const questions =  text.split("\n\n");
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i].split("\n");
    const parsedQuestion = {
      question: question[0].trim(),
      multipleChoice: {
        A: question[1].substring(3).trim(),
        B: question[2].substring(3).trim(),
        C: question[3].substring(3).trim(),
        D: question[4].substring(3).trim(),
      },
      correctAnswer: question[5].substring(15).trim(),
    };
    parsedQuestions.push(parsedQuestion);
  }
  return JSON.stringify(parsedQuestions);
} 

export default fetchQuestions