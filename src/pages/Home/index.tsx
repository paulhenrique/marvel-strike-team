import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';
import axios from 'axios';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [totalElements, setTotalElements] = useState([]);
  const public_key: string = process.env.REACT_APP_PUBLIC_KEY || '';
  const url: string = 'https://gateway.marvel.com/v1/public/characters';

  async function searchHeroes() {
    const response = await axios.get(url, {
      params: {
        apikey: public_key,
        limit: 8,
        offset: 1
      }
    });
    setHeroes(response.data.data.results);
    setTotalElements(response.data.data.total);
    console.log(response.data.data.total);
  }

  useEffect(() => {
    searchHeroes();
  }, []);

  return (
    <>
      <Header />
      <div id="title">
        <div className="container">
          <section>
            <h1>Comics</h1>
            <p># results</p>
          </section>
        </div>
      </div>
      <div id="characters">
        <div className="container">
          <section className="containHeroCards">
            {heroes.map((el: Hero) => {
              return (<HeroCard key={el.id} hero={el} />);
            })}
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;