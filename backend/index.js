import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import { Server } from 'socket.io';
import http from 'http';
import mongoose from 'mongoose';
import auth from "./routes/auth.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle incoming messages
  socket.on('message', (data) => {
    console.log('Message received:', data);

    // Broadcast the message to all connected clients
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get("/",(req,resp)=>{
    resp.send("Home working ,hello !!")
})

app.use('/auth',auth);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => console.log(`server Port: ${port}`));
  })
  .catch((err) => console.log(`did not connect ${err}`));