import React, { lazy } from 'react'
import {
   CContainer,
   CRow,
   CCardHeader
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Orders= () => {
  return (
    <>

    <CCardHeader >
       <h2 className="text-center">Orders</h2>
    </CCardHeader>

     <br/>
     <br/>

    <div className="c-default-layou flex-row ">
      <CContainer>
        <CRow className="justify-content-center">
                  <div>

                    <CIcon
                      className="c-sidebar-brand-full "
                      img src="/images/intro.gif"
                      height={415}
                    />

                  </div>
        </CRow>
      </CContainer>
    </div>

    </>
  )
}

export default Orders
