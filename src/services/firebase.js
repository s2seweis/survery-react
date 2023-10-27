


// // firebase.js
// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCE-StUsOVrhMu8gCqS6pex_mZDAcXme7g',
//   authDomain: 'survey-react-firebase.firebaseapp.com',
//   projectId: 'survey-react-firebase',
//   storageBucket: 'survey-react-firebase.appspot.com',
//   messagingSenderId: '276375268607',
//   appId: '1:276375268607:web:974a8c7cfe203e1a9fb0ca',
// };

// const app = initializeApp(firebaseConfig);
// const firestore = getFirestore(app);

// export { firestore };


// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

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

export { firestore, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };


