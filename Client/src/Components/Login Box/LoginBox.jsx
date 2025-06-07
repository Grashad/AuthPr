
import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Login() {
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  const frmSubmit = (e) => {
    e.preventDefault()
    axios.post("htttp://localhost:4000/login", {username, password})
    .then(item => {
            console.log(item)
          if(item.data === 'success') {
           navigate(`/home`)
          }
        })
        
    .catch(err => console.log(err))
  }
  return ( <div className='loginWrap'>
   
        <form className='formWrap' onSubmit={frmSubmit}>
        <div className='formField'>Username 
          <input className='inputField' type='text'  required placeholder='Username' onChange={(e) => {
            setUsername(e.target.value)
          }}></input></div>
        <div className='formField'>Password 
          <input className='inputField' type='text'   required placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
          </div>
        </form>
         <p className='regStyle '>No account?</p>
        <Link className='linkStyle' to={{pathname: "/register"}}>
        <p className='regLink' >register</p></Link>
    </div>
  )
}

export default Login;