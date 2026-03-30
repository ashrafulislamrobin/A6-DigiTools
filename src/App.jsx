import { useState, useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';

import Steps from './components/Steps';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
     
      <Steps />
     
      
    </div>
  );
}

export default App;