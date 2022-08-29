// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAxFgq7SABzM4vuWlP8CQfSjtIekZJGUoc',
	authDomain: 'calc-mei.firebaseapp.com',
	projectId: 'calc-mei',
	storageBucket: 'calc-mei.appspot.com',
	messagingSenderId: '113866804734',
	appId: '1:113866804734:web:2e266d8643fff5b7ca04af',
	measurementId: 'G-L2VJHKXG14',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
