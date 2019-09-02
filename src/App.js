import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{

constructor()
{
    super();
    this.state={
      currentUser:null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
}
 unSubscribeFromAuth = null;
 

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) =>{
      if(user)
      {
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot(snapshot=>{
          
          this.setState({
            currentUser : {
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>{
            console.log(this.state)
          })
        })
      }
      this.setState({currentUser:user});
     
    })
  }

  componentWillUnmount()
  {
    this.unSubscribeFromAuth();
  }


  render()
  {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
