import React from "react";
import { useState } from "react";
import './homepageStyle.css'
import { Link } from "react-router-dom";
import {ReactComponent as Icon} from '../../Icons/iconU.svg'



function Home() {
    return (
      <main className="mPage">
      <h1>Welcome Back</h1>
      <Icon width="20rem" height="20rem" ></Icon>
      <div className="buttonWrap">
        <Link to={{pathname: '/login'}}><button className="hButton">Login</button></Link>
      </div>
      </main>
    )
}

export default Home;