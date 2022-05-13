import React from 'react';
import './index.css';

const ProfileComponent = ({user}) => {
  
  const userContent = () => {
    if (!user) {
      return null;
    }

    return <>
      <div className="checkOutWrapProfile">
      <div className="profinfoWrap">
          <h2 className="profName">Профиль</h2>
          <div>
              <span className="profParam">EMAIL:</span>
              <span className="profValue">{user.email}</span>
          </div>
          <div>
              <span className="profParam">ИМЯ:</span>
              <span className="profValue">{user.name}</span>
          </div>
          <div>
              <span className="profParam">ОБО МНЕ:</span>
              <span className="profValue">{user.about}</span>
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

