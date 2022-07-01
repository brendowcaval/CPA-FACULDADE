
import { StyleSheet, Text, View } from 'react-native'; /**tags importada do react native */
import { PrincipalNavegacao } from './src/navigations';
import { initializeApp } from "firebase/app";

export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyD2Z8b0_b4Y0SkG2c2yNikfRqlPY1DkeLs",
    authDomain: "cpa-cesmac.firebaseapp.com",
    projectId: "cpa-cesmac",
    storageBucket: "cpa-cesmac.appspot.com",
    messagingSenderId: "943149239827",
    appId: "1:943149239827:web:cc19a9d09ca1c0226ef9e6",
    measurementId: "G-DMEZSE4FZ8"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);

  return (
    
    <PrincipalNavegacao/>
  );
}
