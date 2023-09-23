import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import "firebase/firestore";
import { Firestore , doc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app);

export const login = ({email, password}) => {
    return signInWithEmailAndPassword(auth, email, password)
} ;

export const register = async({email, password, firstName, lastName, phone, urlImage, country, city, address}) => {

    

    const infoUser = await createUserWithEmailAndPassword(auth, email, password).then((userFirebase) => {
        return userFirebase;
    })

    const docuRef = doc(db, `users/${infoUser.user.uid}`);
    setDoc(docuRef, {firstName, lastName, phone, urlImage, country, city, address});

    
};


export const logout = () => {
    return signOut(auth);
}
 
