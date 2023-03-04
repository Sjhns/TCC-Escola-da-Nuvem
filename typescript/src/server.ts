import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from "cors";
import { router } from "./routes/route"

const server = express();

server.use(cors());
server.use(express.json());

server.use(router)

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`server running on port ${port}`) 
});