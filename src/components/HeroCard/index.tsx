import React from 'react';
import { Link } from 'react-router-dom';
import favoriteIcon from '../../assets/img/favorite.svg';
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
    <div className="card">
      <Link className="heroCardLink" to={`/hero/${hero.id}`}>
        <div className="imgContainer">
          <img src={imgPath} alt="" />
        </div>
        <div className="textContainer">
          <h1 className="name-hero">{hero.name}</h1>
          <p className="description-hero">{hero.description}</p>
        </div>
      </Link>
      <button className="heroCardFavoriteButton">
        <img src={favoriteIcon} alt="Icone de Favorito" />
        <span className="tooltip">Adicionar aos Favoritos</span>
      </button>
    </div>
  );
}

export default HeroCard;