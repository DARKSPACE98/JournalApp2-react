import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../strore/auth";

export const AppRouter = () => {

const { status }  = useSelector( state => state.auth);

const dispatch = useDispatch();

useEffect(() => {
  
  onAuthStateChanged( FirebaseAuth, async( user ) =>{
    if ( !user ) return dispatch( logout() );
    const { uid, email, displayName, photoURL} = user;
    dispatch( login ({ uid, email, displayName, photoURL }) );
  })
  
  
}, [])


if ( status === 'checking' ){
  return <CheckingAuth />
}



  return (
    <Routes>

      {
        (status === 'authenticated')
        ?//Si 
        <Route  path="/*" element={ <JournalRoutes/> } />
        ://Si no entonces muestra
        <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

        <Route path='/*' element={ < Navigate to='/auth/login'/> } />
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}
            {/* Login y Registro */}
            
        {/* <Route  path="/*" element={ <JournalRoutes/> } /> */}
            {/* JournalApp */}
    </Routes>
  )
}