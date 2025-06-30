 import {useState, useEffect } from "react";


const userOnlineStatus = () =>{
 const [onlineStatus, setOnlineStatus] = useState(true);
 //--check if user online 
 useEffect(() => {
   window.addEventListener("offline", () => {
    setOnlineStatus(false);
   })
 
  window.addEventListener("online", () => {
    setOnlineStatus(true);
   })
 
 },[])
      
 
 return onlineStatus
}

export default userOnlineStatus;