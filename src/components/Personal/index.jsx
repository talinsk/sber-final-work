import React, {useContext} from 'react';
import personal from './img/personal1.png';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserCtx } from "../../context/UserContext";

const Personal = () => {
  const navigate = useNavigate();
  const {user, setToken, setUser} = useContext(UserCtx);

  const signout = (e) => {
    e.preventDefault();
    setToken("");
    setUser("");
    navigate("/");
  }

  return (
    <>
    {
      user ? 
      <>
      <div className="personal">
        <Link to="/profile">
          <img src={personal} alt="Login" className="personal__el"/>
        </Link>
        <a href='#' onClick={signout} className="personal__el">Выход</a>
        </div>
      </>
      : 
      <Link to="/signin" className="personal__el">
        Вход
      </Link>
    }
    </>
  )
}

export default Personal;