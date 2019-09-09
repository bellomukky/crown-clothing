import React from 'react';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/ShopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user-reducer/user-action';

class App extends React.Component{


 unSubscribeFromAuth = null;
 
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (user) =>{
      if(user)
      {
        const userRef = createUserProfileDocument(user);
        (await userRef).onSnapshot(snapshot=>{
  
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()})
        })
      }
      setCurrentUser(user);
     
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
        <Header/>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route  path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={()=>this.props.currentUser?(<Redirect to="/"/>):(<SignInAndSignUpPage />)}  />
        </Switch>
      </div>
    );
  }
  
}
const mapDispatchToProps = dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
const mapStateToProps = state=>({
  currentUser:state.user.currentUser
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
