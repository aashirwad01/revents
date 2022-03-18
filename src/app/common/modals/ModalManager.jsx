import React from 'react'
import { useSelector } from 'react-redux'
import LoginForm from '../../../features/auth/LoginForm'
import testModal from '../../../features/sandbox/testModal'
import RegisterForm from '../../../features/auth/RegisterForm'



export default function ModalManager() {

    const modalLookup ={
      testModal, 
      LoginForm,
      RegisterForm
      
    
    
    }
    const currentModal = useSelector(state => state.modals)
    let renderedModal;

    if(currentModal){
        const {modalType , modalProps}=currentModal;
        const ModalComponent=modalLookup[modalType];
        renderedModal=<ModalComponent {...modalProps} />
    }
  return (
    <span>{renderedModal}</span>
  )
}
