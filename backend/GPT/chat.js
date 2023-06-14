const axios = require('axios');
require('dotenv').config();

var chatResponseMessage

console.log(process.env.PSCHATACCESSTOKEN)
const headers = {
  'Authorization': `Bearer ${process.env.PSCHATACCESSTOKEN}`,
  'Content-Type': 'application/json'
};

const data = {
  message: 'Give a example of POST call using curl',
  options: {
    model: 'gpt4'
  }
};

axios.post('https://api.psnext.info/api/chat', data, { headers })
  .then(response => {
    chatResponseMessage = reseponse.data.data.message[2].content
  })
  .catch(error => {
    console.error(error);
  });