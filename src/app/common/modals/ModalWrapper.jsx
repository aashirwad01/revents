import { Box, Card, Modal, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from './modalReducer';

export default function ModalWrapper({children,header}) {
    const dispatch = useDispatch();
  return (
    <Modal open={true} sx={{ 
    top:"45%",
    left:"25%",
    width: "50%",
    height:"100%"}}
    onClose={()=>dispatch(closeModal())}  >
        <Card>
        {header && <Typography>{header}</Typography>}
        <Box>
        {children}
        </Box>
        
        </Card>
       
    </Modal>
  )
}
