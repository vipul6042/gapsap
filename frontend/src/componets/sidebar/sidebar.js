import React from "react";
import SidebarChat from "./SidebarChat";
import "./sidebar.css";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from '@mui/icons-material/Search';

function Sidebar() {
  // const chats = ["school", "h1","h2","h3","h4","h6","coaching", "friends", "person1", "person2"];
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div>
          <Avatar
            src="data:image/jpeg;base64,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"
          />
        </div>
        <div className="header_right">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="searchBar">
      <SearchIcon style={{ fontSize: "1.75em", color: "#2c2727e0" }} />
        <input
          class="form-control"
          // type="search"
          placeholder="Search chat"
          aria-label="Search"
        />
        <div class="searchBtn" type="submit">
          {/* <IoMdSearch style={{ fontSize: "1.75em", color: "#2c2727e0" }} /> */}
        </div>
      </div>
      <div className="sidebar_chats">
        {/* <h3 className="chat_title">Chats</h3> */}
        <div className="chat_collection">
          {/* {chats.map((chat) => (
            <div key={chat} className="chat_row">
              {chat}
            </div>
          ))}*/}
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
          <SidebarChat />
        </div> 
        
      </div>
    </div>
  );
}

export default Sidebar;
