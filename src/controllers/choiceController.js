import dayjs from "dayjs";
import db from "../database/databaseConnection.js";
import { ObjectId } from "mongodb";

export async function createChoice(req, res) {
  const { title, pollId } = req.body 

    try {
      const searchPoll = await db.collection('polls').findOne({ _id:  new ObjectId(pollId) } )
        if(!searchPoll) return res.sendStatus(404)

      const expiredDate = searchPoll.expiredAt

      const expired = dayjs().isAfter(expiredDate, 'days')
          if(expired) return res.sendStatus(403)
    
      const searchChoice = await db.collection('choices').findOne({ title: title })    
        if(searchChoice) return res.sendStatus(409)
      
      await db.collection('choices').insertOne({title, pollId })

      res.sendStatus(201)

    } catch(err){
      res.status(500).send(err.message)
    }
  }