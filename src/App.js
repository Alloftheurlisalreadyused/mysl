import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './activity/Home'
import Login from './activity/Login'
import Package from './activity/Packages'
import Promo from './activity/Promo'
import Feedback from './activity/Feedback'
import { CookiesProvider, withCookies } from 'react-cookies';

class App extends Component {

  render() {
    const { cookies } = this.props;
    let num = cookies.get('num');

    if(num){
      return (
        <CookiesProvider>
          <BrowserRouter>
            <div className="App">
              <Route exact path="/" component={Home} />
              <Route path="/packages" component={Package} />
              <Route path="/promo" component={Promo} />
              <Route path="/feedback" component={Feedback} />
            </div>
          </BrowserRouter >
        </CookiesProvider>
      );
    }
    else{
      return(
        <Login/>
      );
    }
  }
}

export default App;
