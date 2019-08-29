import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';

// const HatsPage=()=>(
// <h1>Hatspage</h1>
// )
function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
