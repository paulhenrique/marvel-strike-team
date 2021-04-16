import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';
import axios from 'axios';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const public_key: string = process.env.REACT_APP_PUBLIC_KEY || '';
  const url: string = 'https://gateway.marvel.com/v1/public/characters';

  async function searchHeroes() {
    const response = await axios.get(url, {
      params: {
        apikey: public_key,
        limit: 5,
        offset: 1
      }
    });
    setHeroes(response.data.data.results);
  }

  // useEffect(() => {
  //   searchHeroes();
  // }, []);

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
      <Header />
      <div id="characters">
        <div className="container">
          <section className="headLine">
            <h1>Characters</h1>
            <p># results</p>
          </section>
          <section className="containHeroCards">
            {exampleHeroes.map((el: Hero) => {
              return (<HeroCard hero={el} />);
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;