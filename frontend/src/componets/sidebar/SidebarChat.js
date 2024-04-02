import React from 'react';
import {Avatar} from '@material-ui/core';
import './sidebarChat.css';
function SidebarChat() {
  return (
    <div className='SidebarChat'>
        <Avatar/>
        <div className="chat_info">
            <h2>Room name</h2>
            <p>last message</p>
        </div>
    </div>
  )
}

export default SidebarChat