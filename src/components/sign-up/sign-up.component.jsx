import React from 'react';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,createUserProfileDocument} from './../../firebase/firebase.utils.js';
import './sign-up.style.scss';


class SignUp extends React.Component
{
    constructor()
    {
        super();
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }

    handleSubmit = async event =>
    {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert("Password do not match")
            return
        }

      try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        createUserProfileDocument(user,{displayName});
        this.setState({
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        });
      }catch(error)
      {
          console.error(error);
      }


    }

    handleChange  = async event=>{
        this.setState({[event.target.name]:event.target.value})
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className='sign-in'>
                <h2 className='title'>I do not have an account?</h2>
                <span>Sign up with your email and password</span>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName"
                     value={displayName} label="Display Name"
                      onChange={this.handleChange}/>

                    <FormInput type="email" name="email" value={email} 
                    onChange={this.handleChange} label="Email" />

                    <FormInput type="password" name="password" value={password} 
                    onChange={this.handleChange} label="Password" />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} 
                    onChange={this.handleChange} label="Confirm Password" />

                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp