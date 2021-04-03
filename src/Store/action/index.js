import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from '../../Config/Firebase';


const facebook_login = () => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function (result ) {
            var token = result.credential.accessToken;
            var user = result.user;                   

            
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,           
                uid: user.uid
            }

            // DATA FIREBASE MAI JA RHA HAI
            firebase.database().ref('/').child(`users/${user.uid}`).set(create_user)
            
            
            
            // DATA PAYLOAD MAI JA RHA HAI
            .then(()=>{
                dispatch({type: "SETUSER",payload: create_user})
                alert("USER LOGGED IN SUCCESSFULLY")
               
            })
            console.log("user ====> ", create_user)
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage)
        })
    }
}

export {
    facebook_login,
}