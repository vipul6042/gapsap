import React from 'react'
import Sidebar from '../componets/sidebar/sidebar'
import "./homepage.css"
// import Chat from '../componets/chat/Chat'
const Homepage = () => {
  return (
    <div className="home_app">
      <div className="home_app_body">
        <Sidebar />
        {/* <Chat 
        // messages={message}
        /> */}
      </div>
    </div>
  )
}

export default Homepage