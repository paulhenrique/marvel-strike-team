import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import './style.scss';
import marvel from '../../services/marvel';
import { useParams } from 'react-router';
interface ParamTypes {
  search: string;
}

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [totalElements, setTotalElements] = useState([]);
  const public_key: string = process.env.REACT_APP_PUBLIC_KEY || '';
  const { search } = useParams<ParamTypes>();

  async function searchHeroes() {
    const response = await marvel.get('characters', {
      params: {
        apikey: public_key,
        limit: 8,
        offset: 1,
        nameStartsWith: search
      }
    });
    setHeroes(response.data.data.results);
    setTotalElements(response.data.data.total);
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
            <h1>Characters</h1>
            <p># {totalElements}</p>
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