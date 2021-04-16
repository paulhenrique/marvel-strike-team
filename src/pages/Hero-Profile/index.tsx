import React from 'react';
import Header from '../../components/Header';
function HeroProfile() {
  return (
    <>
      <Header />
      <div id="hero-profile">
        <div className="container">
          <section>
            <h1>Comics</h1>
            <p># results</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default HeroProfile;