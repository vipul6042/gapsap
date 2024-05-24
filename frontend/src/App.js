import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatState } from "./context/chatProvider";
import Loginpage from "./pages/loginpage";
import Homepage from "./pages/homepage";
import { useEffect } from "react";

function App() {
  var {user}=ChatState()
  useEffect(()=>{
    user=localStorage.getItem("userInfo")
  },[user])
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/chat" element={user?<Homepage />:<Loginpage/> } />
          <Route path="/chat/:id" element={user?<Homepage />:<Loginpage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
