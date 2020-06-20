import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import NavigationBar from './components/NavigationBar';
import LoginScreen from './screens/LoginScreen';

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
    <BrowserRouter>
      <NavigationBar/>
      <Route path='/' exact component={HomeScreen}/>
      <Route path='/login' exact component={LoginScreen}/>
    </BrowserRouter>
    
  );
}

export default App;
