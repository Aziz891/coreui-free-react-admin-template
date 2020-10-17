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
              <h4 id="plan" className="card-title mb-0">Scheduled Maintenance Plan</h4>
              <div className="small text-muted">September, 2020</div>
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
              <div className="text-muted">Plan</div>
              <strong> 459 Relays</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={100}
              />
            </CCol>

            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Actual</div>
              <strong> 400 (87.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={87.15}
              />
            </CCol>

            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Average</div>
              <strong> 18.18 Relay/Day </strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={50}
              />
            </CCol>

          </CRow>
        </CCardFooter>
      </CCard>
    </>
  )
}

export default Dashboard
