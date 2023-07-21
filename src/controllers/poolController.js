import { db } from "../database/database.config.js" 
import dayjs from "dayjs"

// export async function createPoll(req, res) {
//     const { title, expireAt } = req.body
//     try {
//         const poll = { title, expireAt: expireAt ?? dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm')}
//         await db.collection("polls").insertOne(poll)
//         res.sendStatus(201) 
//     } catch (err) {
//         res.status(500).send(err.message);
//     }
// }
export async function createPoll(req, res) {
    res.send("deuboa")
}