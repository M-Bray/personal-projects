import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Nav />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
