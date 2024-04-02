import React from 'react'
import Sidebar from '../componets/sidebar/sidebar';
import "./homepage.css"
import Chat from '../componets/chat/Chat';
const Homepage = () => {
    const chats = ["school", "h1","h2","h3","h4","h6","coaching", "friends", "person1", "person2"]
  return (
    <div className="home_app">
      <div className="home_app_body">
        <Sidebar />
        <Chat 
        messages={chats}
        />
      </div>
    </div>
  )
}

export default Homepage