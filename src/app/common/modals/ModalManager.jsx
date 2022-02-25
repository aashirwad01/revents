import React from 'react'
import { useSelector } from 'react-redux'
import testModal from '../../../features/sandbox/testModal'


export default function ModalManager() {

    const modalLookup ={testModal}
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
