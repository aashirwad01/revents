import React from 'react'
import ModalWrapper from '../../app/common/modals/ModalWrapper'

export default function testModal({data}) {
  return (
    <ModalWrapper header='Test Modal'>
        <div>The data {data}</div>
    </ModalWrapper>
  )
}
