import { Button } from '@mui/material'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { IconButton } from '@mui/material';
import {Provider, useDispatch} from 'react-redux'
import {closeModal} from '../../app/common/modals/modalReducer'
import { socialLogin } from '../../app/firestore/firebaseService';

export default function SocialLogin() {
    const dispatch = useDispatch()

    function handleSocialLogin(provider){
        dispatch( closeModal() )
        socialLogin(provider)
    }

  return (
    <>
    <Button  onClick={() => handleSocialLogin('google')}  variant='contained' color='error' startIcon={<><GoogleIcon    fontSize='large' sx={{mr:'3px'}}/> Login With Google </>}>
    
    </Button>

    
    
    
    </>
  )
}
