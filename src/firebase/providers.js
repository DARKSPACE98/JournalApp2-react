import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {

    try{

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult( result );
        const { displayName, email, photoURL, uid} = result.user;
       
        return{
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }

    } catch (error){

    const errorMessage = error.message;

       return{
            ok: false,
            errorMessage,
       }
    }
}


export const registerUserWithEmailPassword = async({ email, password, displayName}) => {

        try{
            console.log({email, password, displayName})

            const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password );
            const { uid, photoURL } = resp.user;
            //TODO: actualizar el displayName en Firebase
            await updateProfile( FirebaseAuth.currentUser, { displayName } );

            return {
                ok: true,
                uid, photoURL, email, displayName
            }

        }catch(error){
            console.log(error);
            return { ok:false, errorMessage: error.message }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    // signInWithEmailAndPassword
    try{
        console.log({email, password })
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { displayName, photoURL, uid} = resp.user;
       
        return{
            ok: true,
            // User info
            displayName, photoURL, uid
        }

    }catch(error){
    
       return{
            ok: false,
            errorMessage: error.message,
       }

    }
    // ese update profile de arriba no se ocupa
}

export  const logoutFirebase = async() => {

    return await FirebaseAuth.signOut();

}