
import './Login.css';

function Login() {
  return  <div className='loginWrap'>
        <h3 className='containerText'>Log In</h3>
        <div className='formWrap'>
        <form className='formField'>Username: <input className='inputField'></input></form>
        <form className='formField'>Password: <input className='inputField'></input></form>
        </div>
        <p></p>
    </div>
}

export default Login;