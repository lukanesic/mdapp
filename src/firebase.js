// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXSbi0y5OF9wwtWfPy5GhaNhwqTT4KN-E',
  authDomain: 'mdapp-d9915.firebaseapp.com',
  projectId: 'mdapp-d9915',
  storageBucket: 'mdapp-d9915.appspot.com',
  messagingSenderId: '906250710061',
  appId: '1:906250710061:web:1ea6d178317ec5f32c1ca4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
