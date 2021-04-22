import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeroCard, { Hero } from '../../components/HeroCard';
import marvel from '../../services/marvel';
import { useParams } from 'react-router';
import ReactPaginate from 'react-paginate';
import Skeleton from 'react-loading-skeleton';
import './style.scss';
interface ParamTypes {
  search: string;
}
function SkeletonLoading() {
  return (
    <>
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
      <Skeleton className="cardSkeleton" height={376} />
    </>
  );
}

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [totalElements, setTotalElements] = useState([]);
  const [offset, setOffset] = useState(0);
  const { search } = useParams<ParamTypes>();
  const public_key: string = process.env.REACT_APP_PUBLIC_KEY || '';

  async function searchHeroes() {
    setHeroes([]);
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
  function AnimateScroll() {
    const el = document.getElementById('characters');
    window.scrollTo({
      top: Number(el?.offsetTop),
      left: 0,
      behavior: 'smooth'
    });
  }
  function handlePageChange(sel: { selected: number }) {
    setOffset((sel.selected) * 8);
    AnimateScroll();
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

            {
              heroes.length === 0 && (<SkeletonLoading />)
            }

            {heroes.length > 0 && heroes.map((el: Hero) => {
              return (<HeroCard key={el.id} hero={el} />);
            })}
          </section>
        </div>
      </div>
      <div className="container">
        <div className="pagination">
          <ReactPaginate
            previousClassName="prevButton"
            nextLinkClassName="nextButton"
            previousLabel="Prev"
            onPageChange={(sel) => handlePageChange(sel)}
            pageCount={Number(Number(totalElements) / 8)}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    </>
  );
}

export default Home;