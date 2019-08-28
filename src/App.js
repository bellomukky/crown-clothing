import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';

// const HatsPage=()=>(
// <h1>Hatspage</h1>
// )
function App() {
  return (
    <div >
       <div >
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
    </div>
  );
}

export default App;
