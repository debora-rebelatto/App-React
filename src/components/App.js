import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Sidebar from './layout/Sidebar'
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import MainContent from './layout/MainContent';
import Counter from './Counter';
import Swapi from './Swapi';
import Jokes from './Jokes';
import Products from './Products';
import Forms from './Forms';

import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false })
    }, 1500)
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading ?
            <h1> Loading ... </h1> :
            <div className="content">
              <Router>
                <Navbar />
                <Route path="/counter" component={Counter} />
                <Route path="/swapi" component={Swapi} />
                <Route path="/content" component={MainContent} />
                <Route path="/jokes" component={Jokes} />
                <Route path="/products" component={Products} />
                <Route path="/forms" component={Forms} />
              </Router>
              <Sidebar />
              <Footer />
            </div>
        }
      </div>
    )
  }
}

export default App;