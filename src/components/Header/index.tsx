import React, { useState } from 'react';
import searchIcon from '../../assets/img/search.svg';
import backgroundImage from '../../assets/img/background-header.png';
import './style.scss';
import { useHistory } from 'react-router';

interface AuxProps {
  hero?: string;
  team?: boolean;
}

const Header: React.FC<AuxProps> = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  return (
    <>
      <header style={{ backgroundImage: `url(${backgroundImage})` }}>
        {
          !props.team ? (
            <div className="headerHome">
              <h1 className="headerTitle">Explore the most powerful characters in Marvel</h1>
              <fieldset>
                <input
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)}
                  type="text"
                  placeholder="Type in a character name"
                />
                <button onClick={() => history.push(`/${searchTerm}`)} type="submit">
                  <img src={searchIcon} alt="ícone de lupa para pesquisa" />
                </button>
              </fieldset>
            </div>
          ) : (
            <div className="headerHero">
              <div className="container">
                <h1 className="headerTitle">{props.hero !== '' ? props.hero : ''}</h1>
              </div>
            </div>
          )

        }
      </header>

    </>
  );
}
export default Header;