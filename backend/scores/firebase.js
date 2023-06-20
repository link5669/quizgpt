import { v4 as uuidv4 } from "uuid";
import database from "../firebaseSetup.js";
import { ref, set } from "firebase/database";

function writeScoreData(username, topic, score) {
  set(ref(database, "scores/" + uuidv4()), {
    username: username,
    topic: topic,
    score: score,
  });
}

async function getAllScores() {
  const scoresRef = ref(database, "scores");
  try {
    const snapshot = await once(scoresRef, "value");
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childKey, childData);
    });
  } catch (error) {
    console.error("Error fetching scores:", error);
  }
}

export { writeScoreData, getAllScores };
