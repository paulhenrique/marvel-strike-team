import React from 'react';
import ironManIcon from '../../assets/img/iron-man-icon.svg';
import usersIcon from '../../assets/img/users.svg'
import './style.scss';

export default function Navbar(){
  return(
    <nav className="navbar">
      <div className="container">
        <div className="left">
          <img src={ironManIcon} alt="Ícone com o capacete do homem de ferro"/>
          <h1>Marvel Strike Team</h1>
        </div>
        <div className="right">
          <a className="button" href="/team">
            Your Team
            <img src={usersIcon} alt="Ícone de usuários"/>
            </a>
        </div>
      </div>
    </nav>
  )
}