import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDbRPhgms7LZQ0AncIC_jyq6CT7ZvoN3_k",
    authDomain: "qarze-hasana.firebaseapp.com",
    projectId: "qarze-hasana",
    storageBucket: "qarze-hasana.appspot.com",
    messagingSenderId: "209220352031",
    appId: "1:209220352031:web:d2a20f3d87453ae9847d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;