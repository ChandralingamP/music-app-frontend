import { createApp } from 'vue'
// import VueSound from 'vue-sound'
import App from './App.vue'
import './assets/index.css' 
import {createPinia} from 'pinia'
import router from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGADeMgG45EGddrwMHKkPjqns3Y6oob0s",
  authDomain: "music-application-20d5b.firebaseapp.com",
  projectId: "music-application-20d5b",
  storageBucket: "music-application-20d5b.appspot.com",
  messagingSenderId: "1080830921489",
  appId: "1:1080830921489:web:0daa39b279aad443219ab0",
  measurementId: "G-V7DXE5R6JB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

/* add icons to the library */
library.add(fas)
createApp(App).use(createPinia()).use(router).component('fa', FontAwesomeIcon).mount('#app')

// const app = createApp(App)
