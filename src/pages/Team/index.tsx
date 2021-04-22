import React from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';

const Team = function () {
  const teamHeroes = JSON.parse(localStorage.getItem('MarvelStrikeTeam')!);

  return (
    <>
      <Header team={true} hero="Here is your own strike team choice">

      </Header>
      <div id="team">
        <div className="container">
          {teamHeroes.map((el: Hero) => (
            <HeroCard hero={el} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Team;