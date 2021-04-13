import React, { Component } from 'react';
import Homepage from './pages/homepage/homepage.component';
// import HatsPage from './pages/hatspage/hatspage.component';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';


const HatsPage = () => (
  <h1>HATS PAGE</h1>
);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/hats' component={HatsPage} />
          </Switch>
        </BrowserRouter>
      </div >
    )
  }
}

export default App;
