import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './assets/style/app.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/hero-profile">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
