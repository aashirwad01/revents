import { SIGN_IN_USER, SIGN_OUT_USER } from "./authConstants";
import firebase from "../../app/config/firebase";
import { APP_LOADED } from "../../app/async/asyncReducer";

export function signInUser(user) {

    return{
        type: SIGN_IN_USER,
        payload:user
    }

//   return async function (dispatch) {
//     try {
//       const result = await firebase
//         .auth()
//         .signInWithEmailAndPassword(creds.email, creds.password);
//       dispatch({
//         type: SIGN_IN_USER,
//         payload: result.user,
//       });
//     } catch (error) {
//       throw error;
//     }
//   };
}

export function verifyAuth(){
    return function(dispatch){
        return firebase.auth().onAuthStateChanged(user => {
            if(user){
                dispatch(
                   signInUser(user)
                )
                dispatch({type : APP_LOADED})
            }
            else{
                dispatch(signoutUser() )
                dispatch({type : APP_LOADED})
            }
        })
    }
}

export function signoutUser() {
  return {
    type: SIGN_OUT_USER,
  };
}
