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

export default function LoginForm() {

    const dispatch = useDispatch()

  return (
    <ModalWrapper 
    header='Sign In to Revents'>
        <Formik
        initialValues={{email:'',password:''}}
        validationSchema={Yup.object({
            email:Yup.string().required().email(),
            password:Yup.string().required()
        })}
        onSubmit=  {async(values,{setSubmitting}) => {
          try{
            
            dispatch( signInUser(values))
            setSubmitting(false)
            console.log(values)
            dispatch(closeModal())
          }catch(e){
            console.log(e)
          }

            
            
        }}
        >
          
          
          {({isSubmitting,isValid,dirty})=>(
              <Form>

            

            <FormControl sx={{margin:'2rem'}}>

            
    
    <MyTextInput name='email'/>
    <MyTextInput name='password' placeholder='Password' type='password' />
    <LoadingButton label='submit'
    type='submit'
    loading={isSubmitting}

   
   sx={{margin:'1rem 0'}}
    disabled ={!isValid || !dirty || isSubmitting}
    
   
    variant="contained">

       Login </LoadingButton>

       </FormControl>
   
       </Form>           




)

}

         
          
          
            


        </Formik>

        </ModalWrapper>
  )
}
