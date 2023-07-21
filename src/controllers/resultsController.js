import { ObjectId } from "mongodb";
import db from "../database/databaseConnection.js";

export async function getResults(req, res) {
  try {
    const id = req.params.id;
    const poll = await db.collection("polls").findOne(new ObjectId(id));

    if (!poll) {
      return res.status(404).send("Poll not found");
    }

    const choices = await db.collection("choices").find({pollId: id}).toArray()
    console.log(choices)

    const result = {
      title: poll.title,
      expireAt: poll.expireAt,
      result: {
        title: winner ? winner.title : "Não teve votos",
        votes: numberWinnerVotes,
      },
    };

    res.status(200).send(result);
  } catch (error) {
    console.error("Error while fetching results:", error);
    res.status(500).send("Internal server error");
  }
}
