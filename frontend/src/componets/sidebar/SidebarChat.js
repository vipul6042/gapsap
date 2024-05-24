import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarchat.css";
import { useNavigate } from "react-router-dom";

function SidebarChat(chat) {
  const navigate = useNavigate();
  return (
    <div
      className="SidebarChat"
      onClick={() => {
        navigate(`/chat/${chat.chat._id}`);
      }}
    >
      <Avatar src={chat.chat.pic} />
      <div className="chat_info">
        <h2>{chat.chat.chatName}</h2>
        <p>
          {chat.chat.latestMessage ? chat.chat.latestMessage : "No Msg yet"}{" "}
        </p>
      </div>
    </div>
  );
}

export default SidebarChat;
