// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
