import './App.css';
import Login from './Components/Login Box/LoginBox';
import Register from './Components/SignUp/Signup'
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';





function App() {
 return ( <div className='containerWrap'>
<BrowserRouter>
<Routes>
    <Route path='/Register' element={<Register />}></Route>
     <Route path='/Login' element={<Login />}></Route>
</Routes>
</BrowserRouter>
</div> )
}

export default App;