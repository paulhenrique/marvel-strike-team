import React, { useState, useEffect } from 'react';
import searchIcon from '../../assets/img/search.svg';
import backgroundImage from '../../assets/img/background-header.png';
import './style.scss';
import { useHistory } from 'react-router';
import { Parallax } from 'react-parallax';
import { useLocation } from 'react-router-dom';

interface AuxProps {
  hero?: string;
  team?: boolean;
}

const Header: React.FC<AuxProps> = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleSearch() {
    if (searchTerm.length > 0) {
      history.push(`/search/${searchTerm}`);
    } else {
      history.push(`/`);
    }

  }

  const location = useLocation();
  const name = location.pathname;

  useEffect(() => {
    if (name.split('/search').length > 1 || name === '/') handleSearch();
  }, [handleSearch, location, name, searchTerm]);



  return (
    <>
      <Parallax bgImage={backgroundImage} strength={250} >
        <header >
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
                  <button
                    onClick={() => handleSearch()}
                    type="button"
                  >
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
      </Parallax>

    </>
  );
}
export default Header;