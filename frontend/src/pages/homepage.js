import React, { useEffect } from 'react'
import Sidebar from '../componets/sidebar/sidebar';
import "./homepage.css"
import Chat from '../componets/chat/chat';
import { ChatState } from "../context/chatProvider";
import { useNavigate} from 'react-router-dom';
import { useToast } from "@chakra-ui/react";


const Homepage = () => {
  const toast = useToast();
  const navigate=useNavigate()
  const {user}=ChatState()
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const checkLogin=()=>{
    if(!userInfo){
      toast({
        title: "Please Signin",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      navigate('/');
    }
  }
  useEffect(async ()=>{
    checkLogin();
  },[])
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