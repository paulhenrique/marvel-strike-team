import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import marvel from '../../services/marvel';
import { useParams } from 'react-router';
import ReactPaginate from 'react-paginate';
import './style.scss';
interface ParamTypes {
  search: string;
}

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [totalElements, setTotalElements] = useState([]);
  const [offset, setOffset] = useState(0);
  const { search } = useParams<ParamTypes>();
  const public_key: string = process.env.REACT_APP_PUBLIC_KEY || '';

  async function searchHeroes() {
    const response = await marvel.get('characters', {
      params: {
        apikey: public_key,
        limit: 8,
        offset: offset,
        nameStartsWith: search
      }
    });
    setHeroes(response.data.data.results);
    setTotalElements(response.data.data.total);
  }

  function handlePageChange(sel: { selected: number }) {
    setOffset(sel.selected * offset)
  }

  useEffect(() => {
    searchHeroes();
  }, [offset, search]);

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
      <div className="container">
        <section className="pagination">
          <ReactPaginate
            previousClassName="prevButton"
            nextLinkClassName="nextButton"
            previousLabel="Prev"
            onPageChange={handlePageChange}
            pageCount={Number(totalElements)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
          />
        </section>
      </div>
    </>
  );
}

export default Home;