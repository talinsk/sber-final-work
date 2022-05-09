import React, { useState, useContext, useEffect } from "react";
import ProfileComponent from '../components/ProfileComponent';
import api from "../Api";
import { UserCtx } from "../context/UserContext";

const Profile = () => {
  const [user, setUser] = useState();
  const { token } = useContext(UserCtx);

  useEffect(() => {
    if (token) {
      api.token = token;
      api.getUserInfo().then(data => {
        console.log(data);
        setUser(data);
      });
    }
    
  }, []);

  return (
    <ProfileComponent user={user}/>
  )
}

export default Profile;