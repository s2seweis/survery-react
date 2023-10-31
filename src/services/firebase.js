
// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCE-StUsOVrhMu8gCqS6pex_mZDAcXme7g',
//   authDomain: 'survey-react-firebase.firebaseapp.com',
//   projectId: 'survey-react-firebase',
//   storageBucket: 'survey-react-firebase.appspot.com',
//   messagingSenderId: '276375268607',
//   appId: '1:276375268607:web:974a8c7cfe203e1a9fb0ca',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// export { firestore, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };

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
const firestore = getFirestore(app);

const registerUser = async (email, name, password) => {
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
    await storeUserData(user.uid, email, name, password);

    return user;
  } catch (error) {
    throw error;
  }
};

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
    // userId: userId
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

// const getUserData = async (uid) => {
//   console.log("line:2", uid);
//   try {
//     const userDoc = await firestore.collection('users').doc(uid).get();
//     if (userDoc.exists) {
//       return userDoc.data();
//     } else {
//       return null; // Handle the case when the user document doesn't exist
//     }
//   } catch (error) {
//     throw error;
//   }
// };

const getUserData = async (uid) => {
  console.log('line:2', uid);
  try {
    const userRef = doc(collection(firestore, 'users'), uid);
    console.log('line:3', userRef);
    const userDoc = await getDoc(userRef);
    console.log('line:5', userDoc);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      return null; // Handle the case when the user document doesn't exist
    }
  } catch (error) {
    throw error;
  }
};

// export { auth, registerUser, loginUser, logoutUser, firestore };
// sill need to replace the customized firsebase functions with the provided 
export { firestore, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, loginUser, logoutUser, registerUser, getUserData };
