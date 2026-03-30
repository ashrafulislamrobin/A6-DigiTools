import { useState, useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';

import Steps from './components/Steps';
import Pricing from './components/Pricing';


function App() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />
      <ProductSection
        products={products}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onClearCart={clearCart}
      />
      <Steps />
      <Pricing />
   </div>
  );
}

export default App;