import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import NavigationBar from './components/NavigationBar';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Route path='/' exact component={HomeScreen}/>
      <Route path='/login' exact component={LoginScreen}/>
    </BrowserRouter>
    
  );
}

export default App;
