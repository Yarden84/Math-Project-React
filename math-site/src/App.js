import React, { Component } from 'react';
import './App.css';

import Navbar from './components/fixedElements/navbar';
import Footer from './components/fixedElements/footer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default App;
