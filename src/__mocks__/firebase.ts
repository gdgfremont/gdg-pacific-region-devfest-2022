import { initializeApp } from 'firebase/app';
import { getFirestore, initializeFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp({
  apiKey: 'API_KEY',
  authDomain: 'PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://PROJECT_ID.firebaseio.com',
  projectId: 'PROJECT_ID',
  storageBucket: 'PROJECT_ID.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
  measurementId: 'G-MEASUREMENT_ID',
});
initializeFirestore(firebaseApp, {ignoreUndefinedProperties: true});
export const db = getFirestore(firebaseApp);
