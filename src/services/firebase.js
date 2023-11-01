import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
} from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
} from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCE-StUsOVrhMu8gCqS6pex_mZDAcXme7g',
//   authDomain: 'survey-react-firebase.firebaseapp.com',
//   projectId: 'survey-react-firebase',
//   storageBucket: 'survey-react-firebase.appspot.com',
//   messagingSenderId: '276375268607',
//   appId: '1:276375268607:web:974a8c7cfe203e1a9fb0ca',
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const checkUserExists = async (email) => {
  const userRef = doc(collection(firestore, 'users'), email);
  const userDoc = await getDoc(userRef);
  return userDoc.exists();
};

const storeUserData = async (userId, email, name, password) => {
  const userRef = doc(collection(firestore, 'users'), userId);
  await setDoc(userRef, {
    userId: userId,
    email: email,
    name: name,
    password: password,
  });
};

const registerUser = async (email, name, password) => {
  const userExists = await checkUserExists(email);
  if (userExists) {
    throw new Error('User with this email already exists.');
  }

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await storeUserData(user.uid, email, name, password);
  return user;
};

const loginUser = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return userCredential.user;
};

const logoutUser = async () => {
  await signOut(auth);
};

const getUserData = async (uid) => {
  const userRef = doc(collection(firestore, 'users'), uid);
  const userDoc = await getDoc(userRef);
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    return null;
  }
};

export {
  firestore,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  loginUser,
  logoutUser,
  registerUser,
  getUserData,
};
