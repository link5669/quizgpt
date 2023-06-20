import firebaseConfig from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import { getDatabase } from "@firebase/database";

const firebaseApp = initializeApp(firebaseConfig);

const db = getDatabase(firebaseApp);

export default db