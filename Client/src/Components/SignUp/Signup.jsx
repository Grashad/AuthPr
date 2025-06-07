import "./Signup.css" 
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Register() {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [rptPassword,setRptPassword] = useState()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("htttp://localhost:3000/register", {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}
return (
<div className="registration-form">
  <h2>Create Account</h2>
  <form className="Wrap" onSubmit={handleSubmit}>
    <div className="form-group">
      <label  htmlFor="username" className="lbl">Username</label>
      <input
        className="iForm"
        type="text"
        id="username"
        name="username"
        required
        placeholder="Enter username"
        onChange={(e) => {
            setName(e.target.value)
        }}
      />
    </div>

    <div className="form-group">
      <label  htmlFor="email" className="lbl">Email</label>
      <input
        className="iForm"
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter email"
         onChange={(e) => {
            setEmail(e.target.value)
        }}
      />
    </div>

    <div className="form-group">
      <label htmlFor="password" className="lbl">Password</label>
      <input
        className="iForm"
        type="password"
        id="password"
        name="password"
        required
        placeholder="Create password"
        minLength="8"
        maxLength="16"
         onChange={(e) => {
            setPassword(e.target.value)
        }}
      />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword" className="lbl">Confirm Password</label>
      <input
        className="iForm"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        placeholder="Repeat password"
        minLength="8"
        maxLength="16"
        onChange={(e) => {
         
        }}
      />
    </div>

    <div className="form-group terms" >
      <input className="checkbx" type="checkbox" id="terms" name="terms" required />
      <label className="TC" htmlFor="terms">I agree to the Terms & Conditions</label>
    </div>

    <button type="submit" className="submit-btn">Register</button>
  </form>
  
  <div className="login-link">
    Already have an account? <a className="loglink" href="/homepage">Sign in</a>
  </div>
</div>
)
}

export default Register