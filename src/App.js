// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./Components/about";~
import Alert from "./Components/Alert";
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
let flag=false;
function App() {
  const [mode,Setmode]=useState('light');
  const [inside,setin]=useState('dark');
  const [alerts,setalert]=useState(null);
  const [bor,setbor]=useState("0px solid white")
  const showalert=(message,type)=>
  {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleMode=()=>
  {
    if(mode==='light' )
    {
      Setmode('dark');
      setin('light');
      document.body.style.backgroundColor="#042743";
      showalert("Dark Mode has been enabled","success");
      setbor("0px solid white");
      flag=true;
    }
    else
    {
      Setmode('light');
      setin('dark');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has been enabled","success");
      flag=false;
    }
  }
  const toggleMode2=()=>
  {
    if(mode==='light' || flag===true)
    {
      Setmode('dark');
      setin('light');
      document.body.style.backgroundColor="#212529";
      showalert("High Contrast Mode has been enabled","success");
      setbor("1px solid white");
      flag=false;
    }
    else
    {
      Setmode('light');
      setin('dark');
      document.body.style.backgroundColor="white";
      showalert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} inside={inside} border={bor}/>
      <Alert alert={alerts}/>
      {/* title here likh kar aa jaayga as hamne kuch pass nahi kiya to wo default arguments le lega */}
      {/* <div className="container my-3">
      <Routes>
          <Route path="/" element={}>
            
          </Route>
          <Route path="/about" element={<About mode={mode}/>}>
          </Route>
      </Routes>
      </div> */}
    {/* </Router> */}
    <TextForm textarea="Welcome" mode={mode} showalert={showalert}/>
    </>
  );
}

export default App;