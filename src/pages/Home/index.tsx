import React from 'react';
import Header from '../../components/Header';
import './style.scss';

export default function Home() {
  return (
    <>
      <Header />
      <div id="characters">
        <div className="container">
          <section>
            <h1>Characters</h1>
            <p># results</p>
          </section>
        </div>
      </div>
    </>
  );
}