import React from 'react';
import { Hero } from '../HeroCard';
import './style.scss';

interface propsHero {
  hero: Hero
}
const HeroCardHeader: React.FC<propsHero> = ({ hero }) => {
  const imageAddress = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  return (
    <div className="cardHeader">
      <div className="cardHeaderContent">
        <div className="heroCardAvatar">
          <img src={imageAddress} alt="Imagem do spider man" />
        </div>
        <div className="cardHeaderTextContainer">
          <h1 className="heroCardName">{hero.name}</h1>
          <p className="heroCardText">{hero.description}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroCardHeader;