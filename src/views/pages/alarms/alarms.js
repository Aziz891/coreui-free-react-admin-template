import React, { lazy } from 'react'
import {
   CButton,
   CCard,
   CCardBody,
   CCardGroup,
   CCol,
   CContainer,
   CForm,
   CInput,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
   CRow,
   CCardHeader,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Alarms = () => {
  return (
    <>


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

export default Alarms
