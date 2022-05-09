import React, {useContext} from 'react';
import personal from './img/personal1.png';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserCtx } from "../../context/UserContext";

const Personal = () => {
  const navigate = useNavigate();
  const {user, setToken, setUser} = useContext(UserCtx);

  const logout = () => {
    setToken("");
    setUser("");
    navigate("/");
  }

  return (
    <>
    {
      user ? 
      <>
      <Link to="/profile" className="personal">
        <img src={personal} alt="Login" className="personal__pic"/>
      </Link>
      <button type="button" onClick={logout}>logout</button>
      </>
      : 
      <Link to="/signin">
        signin
      </Link>
    }
    </>
  )
}

export default Personal;