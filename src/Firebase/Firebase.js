import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
  apiKey: 'AIzaSyAB5OyTRQ4ve2pu58qhf5KV8er_TCKX5wc',
  authDomain: 'fir-tutorial-f2535.firebaseapp.com',
  databaseURL:
    'https://fir-tutorial-f2535-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'fir-tutorial-f2535',
  storageBucket: 'fir-tutorial-f2535.appspot.com',
  messagingSenderId: '239808748990',
  appId: '1:239808748990:web:2a1e1402987a8113226def',
  measurementId: 'G-YJSMHWBP1L',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
