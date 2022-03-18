import { LoadingButton } from '@mui/lab'
import { Alert } from '@mui/material'
import { Button } from '@mui/material'
import { CardHeader } from '@mui/material'
import { FormControl } from '@mui/material'
import { Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Card } from '@mui/material'
import { Form } from 'formik'
import { Formik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import MyTextInput from '../../app/common/form/MyTextInput'
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom'
import { updateUserPassword } from '../../app/firestore/firestoreService'
import LoadingComponent from '../../app/layout/LoadingComponent'

export default function AccountPage() {



    const {currentUser} = useSelector(state=>state.auth)

    
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
    style={{ minHeight: '100vh'  }}
   >
      {currentUser.providerId==='password' && <Grid item >
    <Card sx={{mt:'10vw'}} >
       
        <Typography sx={{mt:'2vw'}} variant='h5'
         align="center">Account</Typography>
         <Typography variant='h6'
         align="center">Change Password</Typography>
        <Formik
        initialValues={{
            newPassword1:'',
            newPassword2:''

    }}
    validationSchema={
            Yup.object({
                newPassword1:Yup.string().required('Password is required'),
                newPassword2:Yup.string().oneOf([Yup.ref('newPassword1'),null],'Passwords do not match')
            })
}
    onSubmit={async (values , {setSubmitting , setErrors})=> {
        try{
            await updateUserPassword(values);
            setSubmitting(false)

        }catch(error){
            setErrors({auth:error.message})
            setSubmitting(false)
        }
        console.log(values)
    }}
        >
            {({errors,isSubmitting,isValid,dirty})=>(
                 <Form>

                <FormControl sx={{margin:'2rem'}}>
                 <MyTextInput  name='newPassword1' type='password' placeholder='New Password' />
                 <MyTextInput  name='newPassword2' type='password' placeholder='Confirm Password' />
                 {errors.auth && <Alert sx={{mt:'10px'}} severity="error">{errors.auth}</Alert>}
                 <LoadingButton label='submit'
    type='submit'
    loading={isSubmitting}

   
   sx={{margin:'1rem 0'}}
    disabled ={!isValid || !dirty || isSubmitting}
    
   
    variant="contained">

      Update Password </LoadingButton>
                 </FormControl>
             </Form>

            )}

           

        </Formik>
       
    </Card>
    </Grid> }  

    {currentUser.providerId==='google.com' && <Grid item>

        <Card style={{minHeight: '20vh' ,minWidth:'30vh'}}>
        <Typography sx={{mt:'2vw'}} variant='h5'
         align="center">Account</Typography>
         <Typography variant='h6'
         align="center">Change Password</Typography>

         <Button href="https://www.google.com/" sx={{mt:'20px'}} color='error'  fullWidth variant='contained' 
          startIcon={<GoogleIcon/>}>
             Go to Google
         </Button>

        </Card>

   
        
        </Grid>
        
        }
    </Grid>
  )
}
