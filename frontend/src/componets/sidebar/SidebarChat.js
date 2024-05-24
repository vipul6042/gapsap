import React from "react";
import { Avatar } from "@material-ui/core";
import "./sidebarchat.css";
import { useNavigate } from "react-router-dom";

function SidebarChat(chat) {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  console.log(chat);
  return (
    <div
      className="SidebarChat"
      onClick={() => {
        navigate(`/chat/${chat.chat._id}`);
      }}
    >
      <Avatar src={chat.chat.pic} />
      <div className="chat_info">
        <h2>
          {chat.chat.chatName === "sender"
            ? user.user._id != chat.chat.users[0].id
              ? chat.chat.users[0].name
              : chat.chat.users[1].name
            : chat.chat.chatName}
        </h2>
        <p>
          {chat.chat.latestMessage
            ? chat.chat.latestMessage.content
            : "No Msg yet"}{" "}
        </p>
      </div>
    </div>
  );
}

export default SidebarChat;
