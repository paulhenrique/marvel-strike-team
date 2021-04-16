import React from 'react';
import Header from '../../components/Header';
import HeroCardHeader from '../../components/HeroCardHeader';
import HeroCardComic from '../../components/HeroCardComic';

function HeroProfile() {
  let comic = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium metus interdum dolor.',
    date: '01/01/1990',
    pages: 47,
    price: 0.90,
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium...',
    thumbnail: {
      path: '/img/spider-man-comic',
      extension: 'png'
    }
  };

  let comics = [];

  comics.push(comic);
  comics.push(comic);
  comics.push(comic);
  comics.push(comic);

  return (
    <>
      <Header hero="Discover all comics this character took part in" title="Comics" results="# results">
        <HeroCardHeader hero={{
          id: 1,
          name: 'Spider Man',
          thumbnail: { path: '/img/spider-man', extension: 'png' },
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend metus in tincidunt blandit. Donec sollicitudin maximus accumsan. Sed condimentum ipsum eu lacus suscipit luctus. Nam eleifend orci at diam pharetra tincidunt. Praesent eu metus viverra.'
        }} />
      </Header>
      <div id="hero-profile">
        <div className="container">
          {comics.map(comic => (
            <HeroCardComic comic={comic}></HeroCardComic>
          ))}

        </div>
      </div>
    </>
  );
}

export default HeroProfile;