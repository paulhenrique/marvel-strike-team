import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HeroProfile from './pages/Hero-Profile';
import './assets/style/app.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/hero-profile">
            <HeroProfile />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
