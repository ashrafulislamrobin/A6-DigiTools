import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
 </div>
  );
}

export default App;