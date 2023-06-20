import express from "express";
import { writeScoreData } from "../scores/firebase.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const { username, topic, score } = req.query;
      writeScoreData(username, topic, score);
      res.status(200).send("Posted score")
    } catch {
      res.status(500).send("Error occurred while posting data to the API");
    }
}); 

export default router;
