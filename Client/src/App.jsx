import './App.css';
import Login from './Components/Login Box/LoginBox';
import Register from './Components/SignUp/Signup';
import { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
return (
<BrowserRouter>
<Routes>
    <Route path='/register' element={<Register />}></Route>
     <Route path='/login' element={<Login />}></Route>
</Routes>
</BrowserRouter>
)
}

export default App;