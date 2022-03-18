import { Form,Formik} from 'formik'
import React from 'react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'
import * as Yup from 'yup'
import { Button, FormControl } from '@mui/material'
import MyTextInput from '../../app/common/form/MyTextInput'
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux'
import { signInUser } from './authActions'
import { closeModal } from '../../app/common/modals/modalReducer'
import { registerInFirebase, signInWithEmail } from '../../app/firestore/firebaseService'
import { Alert } from '@mui/material'
import { Divider } from '@mui/material'
import SocialLogin from './SocialLogin'

export default function RegisterForm() {

    const dispatch = useDispatch()

  return (
    <ModalWrapper 
    header='Register to Revents'>
        <Formik
        initialValues={{displayName:'',email:'',password:''}}
        validationSchema={Yup.object({
            displayName:Yup.string().required(),
            email:Yup.string().required().email(),
            password:Yup.string().required()
        })}
        onSubmit=  {async(values,{setSubmitting , setErrors}) => {
          try{
            
            await registerInFirebase(values)
            // dispatch( signInUser(values))
            setSubmitting(false)
            
            dispatch(closeModal())
          }catch(e){
              setErrors({auth:e.message})
            setSubmitting(false)
            
          }

            
            
        }}
        >
          
          
          {({isSubmitting,isValid,dirty,errors})=>(
              <Form>

            

            <FormControl sx={{margin:'2rem'}}>

            
    
    <MyTextInput name='email' placeholder='Email Address' />
    <MyTextInput name='displayName' placeholder='Display Name' />

    <MyTextInput name='password' placeholder='Password' type='password' />
    {errors.auth && <Alert sx={{mt:'10px'}} severity="error">{errors.auth}</Alert>}
    <LoadingButton label='submit'
    type='submit'
    loading={isSubmitting}

   
   sx={{margin:'1rem 0'}}
    disabled ={!isValid || !dirty || isSubmitting}
    
   
    variant="contained">

       Register </LoadingButton>

       <Divider sx={{mb:'10px'}} color='black'/>
       <SocialLogin/>

       </FormControl>
   
       </Form>           




)

}

         
          
          
            


        </Formik>

        </ModalWrapper>
  )
}
