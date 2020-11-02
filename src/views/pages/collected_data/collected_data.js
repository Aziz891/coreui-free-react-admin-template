import React, { lazy } from 'react'
import {
   CContainer,
   CRow,
   CCard,
   CCardHeader,
   CCardBody,
   CCardFooter,
   CCol,
   CButton
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const Collected_Data= () => {
  return (
    <>

<CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h2 id="collect" className="card-title mb-0">Collected Data</h2>
            </CCol>

            <CCol sm="7" className="d-none d-md-block">
              <CButton to="/settings_info" color="primary" className="float-right" active tabIndex={-1}>
               Add new
              </CButton>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>


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

export default Collected_Data
