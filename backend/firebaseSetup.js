import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: process.env.FIREBASEAPIKEY,
    projectID: process.env.FIREBASEPROJECTID,
    storageBucket: process.env.FIREBASESTORAGEBUCKET,
    messagingSenderID: process.env.FIREBASEMESSAGINGSENDERID,
    appID: process.env.FIREBASEAPPID,
    measurementID: process.env.FIREBASEMEASUREMENTID,
    databaseURL: process.env.FIREBASEDATABASEURL
}

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default db