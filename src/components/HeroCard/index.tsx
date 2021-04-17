import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
export interface Hero {
  id?: number;
  description?: string;
  modified?: Date;
  resourceURI?: string;
  urls?: object[];
  name?: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

interface HeroItemProps {
  hero: Hero
}

const HeroCard: React.FC<HeroItemProps> = ({ hero }) => {

  let imgPath = `${hero.thumbnail.path || ''}.${hero.thumbnail.extension || ''}`;

  return (
    <Link to="/hero-profile">
      <div className="card">
        <div className="imgContainer">
          <img src={imgPath} alt="" />
        </div>
        <div className="textContainer">
          <h1 className="name-hero">{hero.name}</h1>
          <p className="description-hero">{hero.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default HeroCard;