import React, {useContext} from 'react';
import personal from './img/personal1.png';
import './index.css';
import { Link } from 'react-router-dom';
import { UserCtx } from "../../context/UserContext";

const Personal = () => {
  const { user } = useContext(UserCtx);
  console.log(user);

  return (
    <>
    {
      user ? 
      <Link to="/profile" className="personal">
        <img src={personal} alt="Login" className="personal__pic"/>
      </Link>
      : 
      <Link to="/signin">
        signin
      </Link>
    }
    </>
  )
}

export default Personal;