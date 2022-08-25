// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBcJ3RpwigBUK_jAGbeWlt9dzWF0zbq3rA',
	authDomain: 'calculadora-irpf-mei.firebaseapp.com',
	projectId: 'calculadora-irpf-mei',
	storageBucket: 'calculadora-irpf-mei.appspot.com',
	messagingSenderId: '962443985041',
	appId: '1:962443985041:web:24a45fb692017dc2ed3f30',
	measurementId: 'G-11KELZS5Y9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
