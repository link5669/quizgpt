import axios from "axios";
import "dotenv/config";

const getGPTData = async (topic, numQuestions, difficulty) => {
  const headers = {
    Authorization: `Bearer ${process.env.PSCHATACCESSTOKEN}`,
    "Content-Type": "application/json",
  };
  
  const data = {
    message: `
              Give me ${numQuestions} multiple choice questions 
              about ${topic} of ${difficulty} difficulty. Do not create
              questions that involve statistics, dates, or numbers of any kind.
              Only provide questions with answers that have been 
              verified with absolute certainty. Make 
              sure there are four possible answers, make one 
              of them the correct answer and three of them incorrect. 
              Don't make it too easy, but make sure that the user 
              will be able to discern the right answer with a 
              reasonable amount of knowledge on the subject. 
              Please provide the answer following each question. 
              Do not provide any extraneous information.
              Format your response as follows:
              1. How many toes does a polydactyl cat typically have?
              a) 16
              b) 12
              c) 24
              d) 18
              Answer: b) 12

              2. What is a cat's primary sense?
              a) Sight
              b) Taste
              c) Touch
              d) Hearing
              Answer: a) Sight
              `,
    options: {
      model: "gpt35turbo",
    },
  };
  return axios
    .post("https://api.psnext.info/api/chat", data, { headers })
    .then((response) => {
      return response.data.data.messages[2].content;
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getGPTData;
