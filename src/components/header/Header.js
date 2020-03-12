import React from 'react';

import './Header.css';
import AccountIcon from '../../assets/img/baseline_account_circle_white_24dp_1x.png'

function Header() {
  return (
    <div className="header">
      <h1>facebook fake</h1>
      <div className="profile">
        <p>Meu Perfil</p>
        <img src={AccountIcon} alt="Account Icon" />
      </div>
    </div>
  );
}

export default Header;
