
import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


function Login() {
  const [name,setName] = useState()
  const [password,setPassword] = useState()
  const navigate = useNavigate()
  const frmSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/login", {name, password})
              .then(result => console.log(result))
              .catch(err => console.log(err))
        }
  

  return ( <div className='loginWrap'>
   
        <form className='formWrap' onSubmit={frmSubmit} id="btnFrm">
        <div className='formField'>Username 
          <input className='inputField' type='text'  required placeholder='Username' onChange={(e) => {
            setName(e.target.value)
          }}></input></div>
        <div className='formField'>Password 
          <input className='inputField' type='password'  required placeholder='Password' onChange={(e) => {
            setPassword(e.target.value)
          }}></input>
    
          </div>
        </form>
          <div className='btnWrap'>
          <button type="submit" className='logBtn' form='btnFrm' required >Login</button>
          </div>
         <p className='regStyle '>No account?</p>
        <Link className='linkStyle' to={{pathname: "/register"}}>
        <p className='regLink' >register</p></Link>
    </div>
  )
}

export default Login;