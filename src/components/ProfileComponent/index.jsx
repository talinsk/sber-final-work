import React from 'react';
import './index.css';

const ProfileComponent = ({user}) => {
  
  const userContent = () => {
    if (!user) {
      return null;
    }

    return <>
      <div className="checkOutWrap">
      <div className="infoWrap">
          <h2 className="profName">Профиль</h2>
          <div>
              <span className="profParam">EMAIL:</span>
              <span className="profValue">{user.email}</span>
          </div>
          <div>
              <span className="profParam">Дата рождения:</span>
              <span className="profValue">01.01.1985</span>
          </div>
          <div>
              <span className="profParam">Город:</span>
              <span className="profValue">Новосибирск</span>
          </div>
      </div>
      </div>
    </>
  }

  return (
    <>
    {userContent()}
    </>
  )
}

export default ProfileComponent;

