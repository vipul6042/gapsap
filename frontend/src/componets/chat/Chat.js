import React, { useState ,useEffect,useRef} from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IoMdSearch } from "react-icons/io";
import { IoAttach } from "react-icons/io5";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import "./chat.css";
import axios from "./axios";

function Chat({ messages }) {
  const displaySectionRef = useRef(null);
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("/message/new", {
      message: input,
      name: "vipul",
      timestamp: Date(),
      recieved: false,
    });
    setInput("");
  };

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
          <h3>Room name</h3>
          <p>last seen at...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <IoMdSearch />
          </IconButton>
          <IconButton>
            <IoAttach />
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
