import dayjs from "dayjs";
import db from "../database/databaseConnection.js";
import { ObjectId } from "mongodb";


export async function createChoice(req, res) {
  const { title, pollId } = req.body;
  
  try {

    const currentPoll = await db.collection("polls").findOne(new ObjectId(pollId));

    if (!currentPoll) {
      return res
        .status(404)
        .send(
          "Enquete não encontrada!"
        );
    }

    const pollExpiration = currentPoll.expireAt;
    const dateOfChoice = dayjs().format("YYYY-MM-D hh:mm");
   
    if (dateOfChoice < pollExpiration) {
      return res
        .status(403).send("Enquete expirada!")
    }

    const pollChoices = await db
      .collection("choices")
      .findOne({ title: title });

    if (pollChoices) {
      return res.status(409).send("Título inválido!");
    }

    await db.collection("choices").insertOne({ ...title, votes: 0 });

    return res
      .status(201)
      .send(
        `Adicionado com sucesso!`
      );

  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getChoices(req, res){
  const pollId = req.params.id
  console.log(pollId)

  try {
    const poll = await db.collection("choices").find({pollId:pollId}).toArray();
    console.log(poll)
    if (poll === null) {
      res.status(404).send("Enquete não existe.")
    } else {
      res.status(200).send(poll)
    }
  } catch (error) {
    res.status(500).send("Erro interno do servidor.")
  }

}


