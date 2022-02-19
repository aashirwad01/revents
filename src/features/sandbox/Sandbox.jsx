import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './testReducer';

export default function Sandbox() {

  const dispatch =useDispatch();

  const data=useSelector(state=>state.test.data)
  return (
    <>
    <h1>Testing 133</h1>
    <h3>Data is  : {data}</h3>
    <Button onClick={()=>dispatch(increment(20))}>INCREMENT</Button>
    <Button  onClick={()=>dispatch(decrement(20))}>DECREMENT</Button>
    </>
  )
}
