import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';

const Team = function () {
  const [teamHeroes, setTeamHeroes] = useState([]);

  function updateTeamHeroes() {
    if (JSON.stringify(teamHeroes) === localStorage.getItem('MarvelStrikeTeam')) return;
    setTeamHeroes(JSON.parse(localStorage.getItem('MarvelStrikeTeam')!));
  }



  useEffect(() => {
    updateTeamHeroes();
  }, []);

  return (
    <>
      <Header team={true} hero="Here is your own strike team choice">

      </Header>
      <div id="team">
        <div className="container">
          {teamHeroes.splice(0, 8).map((el: Hero) => (
            <HeroCard key={el.id} hero={el} update={updateTeamHeroes} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Team;