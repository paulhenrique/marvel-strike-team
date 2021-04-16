import React from 'react';
import './style.scss';

interface AuxProps {
  comic: Comic
}

interface Comic {
  title: string;
  date: string;
  pages: number;
  price: number;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}
const HeroCardComic: React.FC<AuxProps> = ({ comic }) => {
  const imageAddress = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  return (
    <>
      <div className="cardComic">
        <div className="contentImg">
          <img src={imageAddress} alt={comic.title} />
        </div>
        <div className="cardComicContentText">
          <h1 className="cardComicTitle">
            {comic.title}
          </h1>
          <div className="cardComicContentInformation">
            <p className="dateInformation">{comic.date}</p>
            <p className="pagesInformation">{comic.pages}</p>
            <p className="priceInformation">{comic.price}</p>
          </div>
          <div className="cardComicDescription">
            <p>{comic.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroCardComic;