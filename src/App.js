import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import NavigationBar from './components/NavigationBar';
import LoginScreen from './screens/LoginScreen';
import ShoppingCart from './components/ShoppingCart';
import SellScreen from './screens/SellScreen';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Route path='/' exact component={HomeScreen}/>
      <Route path='/sell' exact component={SellScreen}/>
      <Route path='/login' exact component={LoginScreen}/>
      <Route path='/cart' exact component={ShoppingCart}/>
    </BrowserRouter>
    
  );
}

export default App;
