import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const HatsPage=()=>(
<h1>Hatspage</h1>
)
function App() {
  return (
    <div >
       <div >
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </div>
    </div>
  );
}

export default App;
