import { v4 as uuidv4 } from "uuid";
import database from "../firebaseSetup.js";
import { ref, set, child, get } from "firebase/database";

function writeScoreData(username, topic, score) {
  set(ref(database, "scores/" + uuidv4()), {
    username: username,
    topic: topic,
    score: score,
  });
}

function writeQuestions(topic, questions) {
  questions.forEach(element => {
    set(ref(database, "questions/" + topic + "/" + uuidv4()), {
      answers: element.answers,
      correctAnswer: element.correctAnswer,
      question: element.question
    }).catch((error) => {
      console.error(error);
    });
  });
}

async function getAllScores() {
    const dbRef = ref(database);
    return get(child(dbRef, `scores`)).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return "No data available"
      }
    }).catch((error) => {
      console.error(error);
    });
  }

export { writeScoreData, getAllScores, writeQuestions };
