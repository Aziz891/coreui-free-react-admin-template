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


const Project = () => {
  return (
    <>

   <div className="c-default-layou flex-row ">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>

                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>

                </CCardBody>
              </CCard>

              <CCard className="text-black" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>

                    <CIcon
                      className="c-sidebar-brand-full"
                      img src="/images/db-icon.png"
                      height={250}
                    />

                     <br />

                      <CButton to="/dashboard" color="primary" className="mt-3" active tabIndex={-1}>Dashboard</CButton>

                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>


         <br />
         <br />


                {/*----------------------------------------------------------------------------*/}

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


         <br />
         <br />

                {/*----------------------------------------------------------------------------*/}

      <CRow>
        <CCol>
          <CCard>

            <CCardHeader>
              Team Information
            </CCardHeader>

            <CCardBody>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>

                    <th>Team Members</th>

                    <th>Contact info</th>

                    <th>Joind Team</th>
                  </tr>
                </thead>

                <tbody>

                  {/*----------------------------------------------------------------------------*/}

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>

                    <td>
                      <div>Rakan A. Hakami</div>
                      <div className="small text-muted">
                        <span>Team Leader</span>
                      </div>
                    </td>

                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>Rhakami@ngrid.sa</strong>
                        </div>
                      </div>
                      <div className="float-left">
                          <small className="text-muted">0507961009</small>
                      </div>
                    </td>

                    <td>
                      {/*<div className="small text-muted">Last login</div>*/}
                      <strong>July 2017</strong>
                    </td>

                  </tr>

                  {/*----------------------------------------------------------------------------*/}

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>

                    <td>
                      <div>Salman H. Alomari</div>
                      <div className="small text-muted">
                        <span>Relationship Manager</span>
                      </div>
                    </td>

                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>Shomari@ngrid.sa</strong>
                        </div>
                      </div>
                      <div className="float-left">
                        <small className="text-muted">0544224989</small>
                      </div>
                    </td>

                    <td>
                      {/*<div className="small text-muted">Last login</div>*/}
                      <strong>October 2017</strong>
                    </td>

                  </tr>

                  {/*----------------------------------------------------------------------------*/}

                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/3.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>

                    <td>
                      <div>Abdulaziz A. Alaboodi</div>
                      <div className="small text-muted">
                        <span>Applications and Electronics Manager</span>
                      </div>
                    </td>

                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>Aaaboodi@se.co.sa</strong>
                        </div>
                      </div>
                      <div className="float-left">
                        <small className="text-muted">0504153443</small>
                      </div>
                    </td>

                    <td>
                      {/*<div className="small text-muted">Last login</div>*/}
                      <strong>September 2020</strong>
                    </td>
                  </tr>

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

export default Project
