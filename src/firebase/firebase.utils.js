import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDqbaONqaey_5kqiB7Vw38DMKIN1lE8OWk",
    authDomain: "crown-db-9dec8.firebaseapp.com",
    databaseURL: "https://crown-db-9dec8.firebaseio.com",
    projectId: "crown-db-9dec8",
    storageBucket: "",
    messagingSenderId: "540896101476",
    appId: "1:540896101476:web:5ccbcc29ce835f34"
  }
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (authUser,additionalData)=>{
    if(!authUser)return;

    const userRef = firestore.doc(`users/${authUser.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists)
    {
        const {displayName,email} = authUser;
        const createdAt = Date();
        try{
          await userRef.set({displayName,email,createdAt,...additionalData});
        }catch(error)
        {
          console.log("Error creating user "+ error.message);
        }
    }
   return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase