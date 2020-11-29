import React, {Component, useState} from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CForm,
  CButton,
  CRow,
  CModal,
  CModalTitle,
  CModalHeader,
  CModalBody,
  CModalFooter
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
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
              <h2>Settings Parameters</h2>
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
                  <div className="float-right">
                    {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">
                     <CButton   type="submit" size="sm" variant="outline" color="success"><CIcon name="cil-Spreadsheet" /> Submit</CButton>
                     </CForm>}
                  </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

      </>
    )
  }
}



export default Settings_Parameters
