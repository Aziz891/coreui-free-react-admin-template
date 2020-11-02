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

<CRow>
        <CCol>
          <CCard>
            <CCardBody>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>No.</th>

                    <th>User</th>

                    <th>S/S</th>

                    <th>Bay Number</th>

                    <th>Manufacturer</th>

                    <th>Relay Type</th>

                    <th>Serial No.</th>

                    <th>Date</th>

                    <th></th>

                  </tr>
                </thead>

                <tbody>

                  {/*----------------------------------------------------------------------------*/}

                  <tr>
                    <td>
                       <div>1</div>
                       <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                      <div>Rakan A. Hakami</div>
                      <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                       <div className="clearfix">
                         <strong>KMT</strong>
                       </div>
                     </td>

                     <td>
                      <strong>  AD03  </strong>
                     </td>

                     <td>
                      <strong>  SEL  </strong>
                     </td>

                     <td>
                      <strong>  SEL-411L  </strong>
                     </td>

                     <td>
                      <strong> SEL12457814563 </strong>
                     </td>

                     <td>
                      <strong>11.11.2020</strong>
                      </td>

                     <td>
                      <CRow>
                        <CCol xs="3">
                          <CButton to="" color="primary" className="px-1">More</CButton>
                        </CCol>

                      </CRow>
                     </td>
                  </tr>

                  {/*----------------------------------------------------------------------------*/}

                  <tr>
                    <td>
                       <div>2</div>
                       <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                      <div>Rakan A. Hakami</div>
                      <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                       <div className="clearfix">
                         <strong>KMT</strong>
                       </div>
                     </td>

                     <td>
                      <strong>  AH14  </strong>
                     </td>

                     <td>
                      <strong>  SEL  </strong>
                     </td>

                     <td>
                      <strong>  SEL-751  </strong>
                     </td>

                     <td>
                      <strong> SEL12457814563 </strong>
                     </td>

                     <td>
                      <strong>11.11.2020</strong>
                      </td>

                     <td>
                      <CRow>
                        <CCol xs="3">
                          <CButton to="" color="primary" className="px-1">More</CButton>
                        </CCol>

                      </CRow>
                     </td>
                  </tr>

                  {/*----------------------------------------------------------------------------*/}


                  {/*----------------------------------------------------------------------------*/}

                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>




    </>
  )
}

export default Collected_Data
