import { v4 as uuidv4 } from 'uuid'
import database from "../firebaseSetup.js"
import { ref, set } from "firebase/database"

function writeScoreData(username, topic, score) {
    const db = database
    set(ref(db, 'scores/' + uuidv4()), {
        username: username,
        topic: topic,
        score: score
      });
}

export { writeScoreData }