import dayjs from "dayjs"
import db from "../database/databaseConnection.js"
import { ObjectId } from "mongodb"

export async function vote(req, res) {
  const id = req.params.id
 
  const vote = {
    createdAt: dayjs().format("YYYY-MM-DD HH:MM"),
    choiceId: id
  }

  const choice = await db.collection("choices").findOne(new ObjectId(id))

  if (choice === undefined || choice === null){
    res.status(404).send("Não encontrado")
  } else {

    const poll = await db.collection("polls").findOne(new ObjectId(choice.pollId))
    const now = dayjs()

    if (now.diff(poll.expireAt) < 0) {
        res.status(403).send("Esta enquete já terminou")
    }
    try {
      await db.collection("votes").insertOne(vote)
      res.sendStatus(200)
    } catch (error) {
      res.status(500).send("Problema interno de servidor")
    }

  }

}

