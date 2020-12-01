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
import axios from "axios"

const fields = ['name','description', 'value']

class Settings_Parameters extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', file: ''};
    this.form = {}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios( { method: 'post'  , url: `http://127.0.0.1:8000/dashboard/setting/`, data: {...this.props.location.state.data.form, param: this.props.location.state.data.table }
      , headers: { }

    })
    .then(res => {
      console.log(res);
      

    })
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
                  items={this.props.location.state.data.table}
              
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
