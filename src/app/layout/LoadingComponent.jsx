import { Backdrop, Button, CircularProgress } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

export default function LoadingComponent({content='Loading ...'}) {
    
    const {loading} = useSelector(state => state.async)
    const {initialized}= useSelector(state => state.async)
    // FF0000
  return (
    <div>
       <Backdrop
      sx={{ color: '#FFFFFF',  }}
      open={loading || (!initialized)}
    >
      
      <CircularProgress color= 'inherit' />

      
    </Backdrop>
  </div>
  )
}
