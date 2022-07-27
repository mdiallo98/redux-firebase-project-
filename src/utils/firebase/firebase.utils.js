import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJ9mMvP_6DPPBA48S4qAUS7YfF_XG0x3c',
  authDomain: 'e-commerce-8c7e9.firebaseapp.com',
  projectId: 'e-commerce-8c7e9',
  storageBucket: 'e-commerce-8c7e9.appspot.com',
  messagingSenderId: '11728429268',
  appId: '1:11728429268:web:4e40c75c8bc64ef0999b41',
  measurementId: 'G-JDR1WF2493',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_accoutn',
});

export const auth = getAuth();
export const signInWithGooglePopup = signInWithPopup();
