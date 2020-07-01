import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDm1_uPqQiqGohiwzmN6xmYHDy7TuJTeow",
    authDomain: "e-commerce-dfd9e.firebaseapp.com",
    databaseURL: "https://e-commerce-dfd9e.firebaseio.com",
    projectId: "e-commerce-dfd9e",
    storageBucket: "e-commerce-dfd9e.appspot.com",
    messagingSenderId: "388129369467",
    appId: "1:388129369467:web:10952ec1a19531f7f761de",
    measurementId: "G-LYMBYY5C7B"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;