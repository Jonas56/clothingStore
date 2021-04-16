import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css';




class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
          </Switch>
        </BrowserRouter>
      </div >
    )
  }
}

export default App;
