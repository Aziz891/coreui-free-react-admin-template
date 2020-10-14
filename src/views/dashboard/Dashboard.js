import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Traffic</h4>
              <div className="small text-muted">November 2017</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Visits</div>
              <strong>29.703 Users (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Unique</div>
              <strong>24.093 Users (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Pageviews</div>
              <strong>78.706 Views (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">New Users</div>
              <strong>22.123 Users (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Bounce Rate</div>
              <strong>Average Rate (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts/>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Team Information
            </CCardHeader>

            <CCardBody>

              <br />

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
                      <strong>October 2017</strong>
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
                      <strong>July 2018</strong>
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

export default Dashboard
