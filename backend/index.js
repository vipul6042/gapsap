import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'


dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.get("/",(req,resp)=>{
    resp.send("Home working ,hello !!")
})

app.listen(port, () => {
    console.log(`server listening at http://localhost:${port}`);
})