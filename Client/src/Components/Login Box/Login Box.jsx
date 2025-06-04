
import './Login.css';

function Login() {
  return  <div className='loginWrap'>
        <h3 className='containerText'>Login</h3>
        <div className='formWrap'>
        <form className='formField'>Username <input className='inputField' placeholder='Username'></input></form>
        <form className='formField'>Password <input className='inputField' placeholder='Password'></input></form>
        </div>
        <p className='regLink'>register</p>
    </div>
}

export default Login;