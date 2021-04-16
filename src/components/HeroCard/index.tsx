import React from 'react';

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
      <img src={imgPath} alt="" />
      <h1>{hero.name}</h1>
      <p>{hero.description}</p>
    </div>
  );
}

export default HeroCard;