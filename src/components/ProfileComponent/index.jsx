import React from 'react';
import './index.css';

const ProfileComponent = () => {
  return (
    <>
    <div className="checkOutWrap">
    <div className="infoWrap">
        <h2 className="profName">Имя пользователя</h2>
        <div>
            <span className="profParam">EMAIL:</span>
            <span className="profValue">bla@bla.com</span>
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
  )
}

export default ProfileComponent;

