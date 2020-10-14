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

const Project = () => {
  return (
    <>
      <WidgetsDropdown />

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
