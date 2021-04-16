import React from 'react';
import searchIcon from '../../assets/img/search.svg';
import backgroundImage from '../../assets/img/background-header.png';
import './style.scss';

interface AuxProps {
  title: string;
  results: string;
  hero?: string;
}

const Header: React.FC<AuxProps> = (props) => {
  return (
    <>
      <header style={{ backgroundImage: `url(${backgroundImage})` }}>
        {
          !props.children ? (
            <div className="headerHome">
              <h1 className=".headerTitle">Explore the most powerful characters in Marvel</h1>
              <fieldset>
                <input type="text" placeholder="Type in a character name" />
                <button type="submit">
                  <img src={searchIcon} alt="ícone de lupa para pesquisa" />
                </button>
              </fieldset>
            </div>
          ) : (
            <div className="headerHero">
              <div className="container">
                <h1 className="headerTitle">{props.hero !== '' ? props.hero : ''}</h1>
                {props.children}
              </div>
            </div>
          )

        }
      </header>
      <div id="title">
        <div className="container">
          <section>
            <h1>{props.title}</h1>
            <p>{props.results}</p>
          </section>
        </div>
      </div>
    </>
  );
}
export default Header;