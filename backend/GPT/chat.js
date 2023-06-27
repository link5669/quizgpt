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
              about ${topic} of ${difficulty} difficulty. Ensure 
              that the questions and answers do not involve any 
              numbers, statistics, or dates. Focus on qualitative 
              aspects and verified facts. Make 
              sure there are four possible answers, make one 
              of them the correct answer and three of them incorrect. 
              Don't make it too easy, but make sure that the user 
              will be able to discern the right answer with a 
              reasonable amount of knowledge on the subject. 
              Please provide the answer following each question. 
              Do not provide any extraneous information.
              Format your response as follows and put a line
              return after the answer:
              1. What is the purpose of the hosts file on a PC?
              a) To configure network settings
              b) To block access to specific websites
              c) To map domain names to IP addresses
              d) To store user account information
              Answer: c) To map domain names to IP addresses
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
      console.log("FAILED PROMPT");
      console.error(error);
    });
};

export default getGPTData;
