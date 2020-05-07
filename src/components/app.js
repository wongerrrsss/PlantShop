import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './navbar';
import About from './about';
import Contact from './contact';
import Home from './home';
import FAQ from './faq';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/faq' exact component={FAQ} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
