import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: 'AIzaSyC3Lk-XF76_6aX14C6Dik55k4lskS_34UQ',
  authDomain: 'poppin-2f3c7.firebaseapp.com',
  projectId: 'poppin-2f3c7',
  storageBucket: 'poppin-2f3c7.appspot.com',
  messagingSenderId: '80541683446',
  appId: '1:80541683446:web:e6b2e01faae33d5e94e6d7',
  measurementId: 'G-G2QKVSW7ED',
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const db = getFirestore(app);
