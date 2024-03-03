import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import mongoose from 'mongoose';
import auth from "./routes/auth.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.get("/",(req,resp)=>{
    resp.send("Home working ,hello !!")
})

app.use('/auth',auth);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => console.log(`server Port: ${port}`));
    // User.insertMany(users);
    // Order.insertMany(orders);
    // Item.insertMany(items);
  })
  .catch((err) => console.log(`did not connect ${err}`));