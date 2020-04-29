import React, { Component } from "react";

// Components
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import MainContent from './layout/MainContent';

import '../styles/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="content" >
        <Navbar />
        <Sidebar />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;