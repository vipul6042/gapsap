import React, { useState, useEffect, useRef } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";
import { useParams } from "react-router-dom";
import { ChatState } from "../../context/chatProvider";
// import axios from "./axios";

function Chat({ messages }) {
  const { user, setUser } = ChatState();
  const [chats, setChats] = useState([]);
  const { id } = useParams();
  const displaySectionRef = useRef(null);
  const [input, setInput] = useState("");
  const fetchChats = async () => {
    try {
      const url = process.env.REACT_APP_BASE_URL;
      const token = await user.token;
      const response = await fetch(`${url}/chat/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setChats(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const sendMessage = async (e) => {
    e.preventDefault();

    // await axios.post("/message/new", {
    //   message: input,
    //   name: "vipul",
    //   timestamp: Date(),
    //   recieved: false,
    // });
    setInput("");
  };
  useEffect(() => {
    fetchChats(); 
  }, [id]);
  useEffect(() => {
    fetchChats(); 
  }, []);
console.log(chats);
  useEffect(() => {
    // Scroll to the bottom when messages are updated
    if (displaySectionRef.current) {
      displaySectionRef.current.scrollTop =
        displaySectionRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="chat_secton">
      <div className="chat_header">
        <Avatar />
        <div className="chat_header_info">
          <h3>{chats.chatName}</h3>
          <p>{chats.isGroupChat?chats.users.map((user)=>(user.name+"  ")):"last seen at"}</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="display_section" ref={displaySectionRef}>
        {messages.map((message) => (
          <p
            className={`chat_message ${
              !message.recieved ? "chat_reciever" : ""
            }`}
            key={message._id}
          >
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input
            placeholder="Type a message"
            type="text"
            name="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a messsage
          </button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
