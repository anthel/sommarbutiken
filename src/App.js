import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
    </BrowserRouter>
    
  );
}

export default App;
