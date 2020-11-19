import React, {Component} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import usersData from '../users/UsersData'



const fields = ['Name','Description', 'Value']

class Settings_Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', file: ''};
  }

  render() {
    return (
      <>
        <CRow>
          <CCol>
            <CCard>
              <CCardHeader>

              </CCardHeader>
              <CCardBody>
              <CDataTable
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={30}
                pagination
              />
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </>
    )
  }
}



export default Settings_Parameters
