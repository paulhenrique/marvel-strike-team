import React from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';

const Team = function () {
  let exampleHeroes = [
    {
      id: 1,
      name: 'Spider Man',
      thumbnail: { path: '/img/spider-man', extension: 'png' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'
    },
    {
      id: 1,
      name: 'Spider Man',
      thumbnail: { path: '/img/spider-man', extension: 'png' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'
    },
    {
      id: 1,
      name: 'Spider Man',
      thumbnail: { path: '/img/spider-man', extension: 'png' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'
    },
    {
      id: 1,
      name: 'Spider Man',
      thumbnail: { path: '/img/spider-man', extension: 'png' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'
    },
    {
      id: 1,
      name: 'Spider Man',
      thumbnail: { path: '/img/spider-man', extension: 'png' },
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel convallis velit.'
    }
  ]
  return (
    <>
      <Header team={true} hero="Here is your own strike team choice">

      </Header>
      <div id="team">
        <div className="container">
          {exampleHeroes.map((el: Hero) => (
            <HeroCard hero={el} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Team;