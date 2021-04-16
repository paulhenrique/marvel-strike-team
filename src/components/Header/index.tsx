import React from 'react';
import searchIcon from '../../assets/img/search.svg';
import backgroundImage from '../../assets/img/background-header.png';
import './style.scss';

export default function Header() {
  return (
    <header style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div>
        <h1>Explore the most powerful characters in Marvel</h1>
        <fieldset>
          <input type="text" placeholder="Type in a character name" />
          <button type="submit">
            <img src={searchIcon} alt="ícone de lupa para pesquisa" />
          </button>
        </fieldset>
      </div>
    </header>
  );
}