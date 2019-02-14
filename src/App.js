import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';

class App extends React.Component{
  render() {
    return (
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/explore" component={ProductPage} exact />
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default App;
