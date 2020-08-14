import React,{useState} from "react";

function App() {

 const now = new Date().toLocaleTimeString();
 const [time,setTime] = useState(now)
 
 setInterval(change,1000);
 
 function change(){
const getTimeNow = new Date().toLocaleTimeString()
   setTime(getTimeNow); 
 }

 return (
   <div>
     <h1>Time</h1>
     <h1>{time}</h1>
          
  </div>
 ) 


}
export default App;
