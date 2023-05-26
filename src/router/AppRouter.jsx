import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/";
import { useCheckAuth } from "../hooks";

export const AppRouter = () => {

const status = useCheckAuth();

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