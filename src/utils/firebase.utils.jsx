import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAGtCVC6HlZOnJm-GUn0gRNbSopuJf5w1A",
    authDomain: "crwn-clothing-db-13938.firebaseapp.com",
    projectId: "crwn-clothing-db-13938",
    storageBucket: "crwn-clothing-db-13938.appspot.com",
    messagingSenderId: "702158772077",
    appId: "1:702158772077:web:e51b91f802fd53d90b6c64"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  // if user data doesn't exist
}