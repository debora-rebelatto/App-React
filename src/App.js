import React from "react";

// Components
import Sidebar from './components/layout/Sidebar'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';

import './styles/App.css'
function App() {
  
  return (
    <div className="content">
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App;