// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAaWTuPJoaFth012Rso8Q3HSnh0cYjI4OI",
	authDomain: "jx-website.firebaseapp.com",
	projectId: "jx-website",
	storageBucket: "jx-website.appspot.com",
	messagingSenderId: "439167114654",
	appId: "1:439167114654:web:0998419421eaa82d494a8f",
	measurementId: "G-Q8W804NMGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
