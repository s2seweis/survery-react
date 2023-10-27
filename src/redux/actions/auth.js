import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '../../services/firebase';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const login = (email, password) => async (dispatch) => {
  try {
    // Firebase login logic here
    // For example, using signInWithEmailAndPassword method
    await signInWithEmailAndPassword(auth, email, password);

    // Dispatch action if login is successful
    dispatch({ type: LOGIN_SUCCESS });
  } catch (error) {
    console.error('Login error: ', error);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // Firebase logout logic here
    // For example, using signOut method
    await signOut(auth);

    // Dispatch action if logout is successful
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    console.error('Logout error: ', error);
  }
};

export const register = (email, password) => async (dispatch) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    dispatch({ type: REGISTER_SUCCESS });
  } catch (error) {
    console.error('Registration error: ', error);
  }
};
