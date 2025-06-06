import React from "react";
import Login from "../Login Box/LoginBox";
import { useState } from "react";
import './homepageStyle.css'
import { Link } from "react-router-dom";
import {ReactComponent as Icon} from '../../Icons/iconU.svg'





function Home() {
  const [showComponent,setShowComponent] = useState("false")
  const dispForm = () => {
   setShowComponent(true);
   
  }
  
    return (
      <main className="mPage">
      <h1>Welcome Back</h1>
      <Icon width="15rem" height="15rem" ></Icon>
      <div className="buttonWrap">
       {(showComponent === true)? (<Login ></Login>) : (<button className="hButton" onClick={dispForm}>Login</button>)}
      </div>
      </main>
    )
}

export default Home;