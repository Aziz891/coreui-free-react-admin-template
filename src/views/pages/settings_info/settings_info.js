import React from 'react'
import {Redirect} from 'react-router'

import axios from 'axios';
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
//import SettingModal from '../setting_components/settingModal'

class Settings_Info extends React.Component {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showElements, setShowElements] = React.useState(true)

constructor(props) {
    super(props);
    this.tableData = {};
    this.state = {value: '', file: '', buttonClicked: false, showModal: false, redirect:false};

    this.uploadsettings = this.uploadsettings.bind(this);
  }

  uploadsettings() {
      alert('Upload settings from Site <o>');}

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {

    return (
      <>

      {<CRow>
        {<CCol xs="12" md="8">
          {<CCard>

            <CCardHeader>
              <h2>Settings Information</h2>
            </CCardHeader>

                {/*-----------------------------------------------------------------*/}

            {<CCardBody>
              {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text">Substation Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CInput type="text" />
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text">Bay Number</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CInput type="text" />
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>

                  <CCol md="3">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">----</option>
                      <option value="1">SEL</option>
                      <option value="2">ABB</option>
                      <option value="3">GE</option>
                      <option value="4">Siemens</option>
                      <option value="5">ZIV</option>
                      <option value="6">Schneider</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectms">Scheme Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="ms">
                    <CSelect custom size="ms" name="selectms" id="selectms">
                      <option value="0">----</option>
                      <option value="1">OPDS</option>
                      <option value="2">Non-OPDS</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="selectms">Serial No. List</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="ms">
                    <CSelect custom size="ms" name="selectms" id="selectms">
                      <option value="0">----</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>}
                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel>Function</CLabel>
                  </CCol>
                  <CCol md="9">
                        <CFormGroup variant="custom-checkbox" inline>
                          <CInputCheckbox
                           custom
                           id="inline-checkbox1"
                           name="inline-checkbox1"
                           value="option1"
                           />
                          <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Distance</CLabel>
                        </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Differential</CLabel>
                         </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Over Current</CLabel>
                         </CFormGroup>

                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Multifunction</CLabel>
                         </CFormGroup>
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                   <CButton size="sm" color="info" onClick={this.uploadsettings}>
                   <CIcon name="cil-CloudDownload"/> Collect Settings</CButton>

                {/*-----------------------------------------------------------------*/}

                   <CButton size="sm" color="info" to="/collected_data" className="float-right">Cancel</CButton>

                {/*-----------------------------------------------------------------*/}

              </CForm>}
            </CCardBody>}
          </CCard>}
        </CCol>}
      </CRow>}

    </>
  )
}
}

export default Settings_Info
