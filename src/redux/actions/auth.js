
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, loginUser, logoutUser, registerUser, getUserData } from '../../services/firebase';
import { setUserData, clearUserData } from './user';







export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});


export const login = (email, password) => async (dispatch) => {


  
  // try {
  //   await signInWithEmailAndPassword(auth, email, password);
  //   dispatch({ type: LOGIN_SUCCESS });
  // } catch (error) {
  //   console.error('Login error: ', error);
  // }
  try {
    // Dispatch action indicating login request is initiated
    // dispatch({ type: LOGIN_REQUEST });

    // Firebase login logic here
    const userCredential = await loginUser(email, password);
    const user = userCredential.user;
    console.log("line:1", userCredential.uid);

    // Fetch user data from Firestore
    const userData = await getUserData(userCredential.uid);
    console.log("line:5", userData);

    // user.userData = userData;
    // console.log("line:6", user.userData);



    // store.dispatch({ type: 'STORE_USER', payload: userData });

    dispatch(setUserData(userData));
    dispatch(loginSuccess(userData));

     setTimeout (() => {
      window.location.href = '/';
    }, 500);

    

    // Dispatch action if login is successful
    // dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    // Dispatch action if login fails
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

// export const logout = () => async (dispatch) => {
//   try {
//     // Firebase logout logic here
//     // For example, using signOut method
//     // await signOut(auth);
//     await logoutUser();

//     // Dispatch action if logout is successful
//     dispatch({ type: LOGOUT_SUCCESS });
//   } catch (error) {
//     console.error('Logout error: ', error);
//   }
// };

export const logout = () => async (dispatch) => {
  try {
    dispatch(clearUserData());
    dispatch({ type: LOGOUT_REQUEST });
    await logoutUser();
    
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAILURE, payload: error.message });
  }
};

// export const register = (email, password) => async (dispatch) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     dispatch({ type: REGISTER_SUCCESS });
//   } catch (error) {
//     console.error('Registration error: ', error);
//   }
// };

export const register = (email, name, password) => async (dispatch) => {
 
  try {
    dispatch({ type: REGISTER_REQUEST });
    const user = await registerUser(email, name, password);
    console.log("line:500", user.uid);
    const userData = await getUserData(user.uid);
    dispatch(setUserData(userData));

    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error.message });
  }
};
