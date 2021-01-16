import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HomePage } from './Home';
import { RandomMealPage } from './RandomMealPage';
import './App.css';
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='div'>
          <nav>
            <Link className='link' to='/'>
              HOME
            </Link>
            <Link className='link' to='/random'>
              Try random meal
            </Link>
          </nav>
          <main>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route path='/random'>
                <RandomMealPage />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
