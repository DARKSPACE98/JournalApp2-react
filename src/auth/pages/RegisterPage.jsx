import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';

const formData ={
  email: 'enrique@google.com',
  password: '123456',
  displayName: 'Enrique Barraza',
}


export const RegisterPage = () => {

  const {displayName, email, password, onInputChange, formState} = useForm(formData);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log({formState})
  }

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={ onSubmit }>
          <Grid container>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
              label="Nombre completo" 
              type="text" 
              placeholder="Enrique Barraza"
              fullWidth 
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
            />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
              label="Correo" 
              type="email" 
              placeholder="cuenta@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
            </Grid>
            <Grid item xs={ 12 } sx={{ mt:2 }}>
              <TextField 
              label="Contraseña" 
              type="password" 
              placeholder="contraseña"
              fullWidth 
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
            </Grid>
            <Grid container spacing={ 2 } sx={{ mb: 2 }}>
              <Grid item xs={ 12 }>
                <Button
                type="submit" 
                variant="contained" 
                fullWidth 
                sx={{mt: 1}}
                >
                  Crear Cuenta
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{ mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
  )
}