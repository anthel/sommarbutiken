import React, {useState} from 'react';
import './App.css';

import Nav from './components/Nav'
import Stuffz from './components/Stuffz'





function App() {

let [amountInCart, setAmountInCart] = useState(0)


  const addItemToCart = e => {
    const itemToSend = e.target.parentNode.firstChild
    itemToSend.className = "flyToCart"
    const cart = document.getElementById('cart').firstChild
    const amount = document.getElementById('amountInCart')
    cart.className = "shake"
    amount.className = "amount"
    setTimeout(() => {
      setAmountInCart(amountInCart+1)
      }, 1600);
    setTimeout(() => {
    itemToSend.className = null
    cart.className = null
    amount.className = null
    }, 3000);
  }

  return (
    <div className="App">
      <Nav amountInCart={amountInCart}/>
      <Stuffz addItemToCart={addItemToCart}/>
    </div>
  );
}

export default App;
