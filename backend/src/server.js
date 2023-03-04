const express = require("express")
const app = express();
const router = require("./routes/routes")
const cors = require('cors')
require("dotenv").config();

const corsOptions = {
  origin: "",
}
app.use(cors())

app.use(express.json())
app.use(router)

const port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log("server running on port 3000") 
  })  
  