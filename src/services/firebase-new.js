// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCE-StUsOVrhMu8gCqS6pex_mZDAcXme7g',
    authDomain: 'survey-react-firebase.firebaseapp.com',
    projectId: 'survey-react-firebase',
    storageBucket: 'survey-react-firebase.appspot.com',
    messagingSenderId: '276375268607',
    appId: '1:276375268607:web:974a8c7cfe203e1a9fb0ca',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const firestore = getFirestore(app);

const registerUser = async (email, password) => {
  try {
    // Check if a user with the provided email already exists
    const userExists = await checkUserExists(email);
    if (userExists) {
      throw new Error('User with this email already exists.');
    }

    // Create user in Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Store additional user data in Firestore
    await storeUserData(user.uid, email);

    return user;
  } catch (error) {
    throw error;
  }
};

const checkUserExists = async (email) => {
  const userRef = doc(collection(db, 'users'), email);
  const userDoc = await getDoc(userRef);
  return userDoc.exists();
};

const storeUserData = async (userId, email) => {
  const userRef = doc(collection(db, 'users'), userId);
  await setDoc(userRef, {
    email: email,
    // Add more user data fields as needed
  });
};

const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

export { auth, registerUser, loginUser, logoutUser, firestore };
