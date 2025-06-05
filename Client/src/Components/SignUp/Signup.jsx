import "./Signup.css" 
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
function Register() {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("htttp://localhost:4000/register", {name, email, password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
}
return (
<div className="registration-form">
  <h2>Create Account</h2>
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
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
      <label htmlFor="email">Email</label>
      <input
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
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Create password"
        minLength="8"
         onChange={(e) => {
            setPassword(e.target.value)
        }}
      />
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        placeholder="Repeat password"
        minLength="8"
        onChange={(e) => {
            setPassword(e.target.value)
        }}
      />
    </div>

    <div className="form-group terms">
      <input type="checkbox" id="terms" name="terms" required />
      <label htmlFor="terms">I agree to the Terms & Conditions</label>
    </div>

    <button type="submit" className="submit-btn">Register</button>
  </form>
  
  <div className="login-link">
    Already have an account? <a href="/login">Sign in</a>
  </div>
</div>
)
}

export default Register