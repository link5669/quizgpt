import express from "express";
import { getAllScores, writeScoreData } from "../scores/firebase.js";

const router = express.Router();

router.post("/", async (req, res) => {  
    try {
      const { username, topic, score } = req.query;
      console.log(username);
      writeScoreData(username, topic, score);
      res.status(200).send("Posted score")
    } catch {
      res.status(500).send("Error occurred while posting data to the API");
    }
}); 

router.get("/", async (req, res) => {
    try {
        await getAllScores().then(result => res.status(200).send(result))
    } catch {
      res.status(500).send("Error occurred while fetching data from the API");
    }
}); 

export default router;
