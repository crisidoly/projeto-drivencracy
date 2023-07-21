import db from "../database/databaseConnection.js"
import dayjs from "dayjs"
import { ObjectId } from "mongodb";

export async function createPoll(req, res) {
    const { title, expireAt } = req.body;
    const poll = req.body;
  
    try {
      const checkPoll = await db.collection("polls").findOne({ title });
  
      if (!expireAt) {
        let currentTime = dayjs().add(30, "day").format("YYYY-MM-D hh:mm");
  
        const completedPoll = { title, expireAt: currentTime };
        await db.collection("polls").insertOne(completedPoll);
        return res.status(201).send(`Enquete criada!`);
      }
  
      await db.collection("polls").insertOne(poll);
      return res.status(201).send(`Enquete criada!`);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }

  export async function getPoll(req, res) {
    const pollList = await db.collection("polls").find().toArray();
  
    try {
      if (pollList.length === 0) {
        return res.status(204).send("Não tem enquetes cadastradas ainda!");
      }
      return res.status(200).send(pollList);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }

  export async function getPoolChoices(req, res) {
    const poolId = req.params.id;
  
    try {
      const pollChoices = await db
        .collection("choices")
        .find({ pollId: pollId })
        .toArray();
      if (pollChoices.length === 0) {
        return res.status(404).send("Enquete não encontrada");
      }
  
      return res.status(200).send(pollChoices);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }