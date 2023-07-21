import express from "express"
import cors from "cors"
import router from "./src/routes/routesIndex.js"
import dotenv from "dotenv"

const app = express();
app.use(express.json());
app.use(cors());      
app.use(router)  
dotenv.config();

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Running server on port ${port}`))

