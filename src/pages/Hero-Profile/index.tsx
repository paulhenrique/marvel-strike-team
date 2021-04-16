import React from 'react';
import Header from '../../components/Header';
import HeroCardHeader from '../../components/HeroCardHeader';
function HeroProfile() {
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

      </div>
    </>
  );
}

export default HeroProfile;