import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Post from './pages/Post';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { UserCtx } from './context/UserContext';

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  const userHandler = (id) => {
    setUser(id);
    localStorage.setItem("user", id);
  }

  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const tokenHandler = (data) => {
      setToken(data);
      localStorage.setItem("token", data);
  }

  return (
    <UserCtx.Provider value={{token: token, user: user, setToken: tokenHandler, setUser: userHandler }}>
      <div className='container'>
        <div className='content'>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/post/:id" element={<Post/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </div>
        {/*<Card/>*/}
        {/*dataCards*/}
        {/*<Main/>*/}
        <Footer/>
      </div>
    </UserCtx.Provider>
  )
}
export default App;