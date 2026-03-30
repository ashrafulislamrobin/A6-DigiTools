import { useState, useEffect } from 'react';

import Navbar from './components/Navbar';


function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
     
    </div>
  );
}

export default App;