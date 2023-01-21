// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push
}
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlBY5M7rSYFEzXo9-pNQ38qfg96U6bm-0",
    authDomain: "quiz-app-d0433.firebaseapp.com",
    projectId: "quiz-app-d0433",
    storageBucket: "quiz-app-d0433.appspot.com",
    messagingSenderId: "363474942081",
    appId: "1:363474942081:web:2cfbebe8bf386ad3913580",
    measurementId: "G-YW0D4F4427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);


var options = [];


