import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement, increment } from './testReducer';
import { LoadingButton } from '@mui/lab';


export default function Sandbox() {

  const dispatch =useDispatch();

  const [target,setTarget]=useState(null)

  const data=useSelector(state=>state.test.data)
  const {loading} = useSelector((state)=>state.async)
  return (
    <>
    <h1>Testing 133</h1>
    <h3>Data is  : {data}</h3>
   <LoadingButton name='Increment' loading={loading && target==='Increment'}  onClick={(e)=>{

     setTarget(e.target.name)
     dispatch(increment(20))
   }
    
    } >INCREMENT</LoadingButton> 
    
    <LoadingButton name='Decrement' loading={loading && target==='Decrement'}  onClick={(e)=>
     {
      dispatch(decrement(20))
      setTarget(e.target.name)
     }
      }>DECREMENT</LoadingButton>
    <Button  onClick={()=>dispatch(openModal({modalType:'testModal',modalProps:{data}}))}>Modal</Button>
    
    </>
  )
}
