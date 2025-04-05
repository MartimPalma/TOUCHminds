// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3zTp5CC9lIvNwt1XN1l69lMobSfOgMyg",
  authDomain: "touchminds.firebaseapp.com",
  projectId: "touchminds",
  storageBucket: "touchminds.firebasestorage.app",
  messagingSenderId: "836514843503",
  appId: "1:836514843503:web:d8f0bfc8ea8ac53514769a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



{/*  Informações a guardar na base de dados:   

Quantos módulos foram concluídos. 

Tempo gasto para completar as atividades e os módulos. 

Periodicidade da realização dos módulos (se foram feitos todos no mesmo dia ou distribuídos ao longo da semana). 

*/}