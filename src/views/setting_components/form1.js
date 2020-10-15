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
import SettingModal from '../setting_components/settingModal'

class SettingsForm extends React.Component {
//   const [collapsed, setCollapsed] = React.useState(true)
//   const [showElements, setShowElements] = React.useState(true)

constructor(props) {
    super(props);
    this.tableData = {};
    this.state = {value: '', file: '', buttonClicked: false, showModal: false, redirect:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);


    this.uploadsettings = this.uploadsettings.bind(this);

  }

  uploadsettings() {
      alert('Upload settings from Site <o>');}

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  modalToggle(value){

    this.setState({showModal: value});
}

handleChangeFile(event) {
    event.preventDefault();
    console.log(event.target.files);
    this.setState({file: event.target.files[0]});
  }

  handleSubmit(event) {
    event.preventDefault();
    const FormData = require('form-data');
    const form = new FormData();
    form.append('my_field', this.state.value);
    form.append('file', this.state.file);





    // const formData   = {
      //     name45: this.state.value,
      //     file: this.state.file

      //   };
      //   console.log(formData)

      axios( { method: 'post'  , url: `http://127.0.0.1:8000/faults/setting_check/`, data: form
      , headers: { }

    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.tableData = JSON.parse( res.data['result'])
      console.log(this.tableData)
      console.log('working');
      this.modalToggle(true)


    })



  }
  handleClick(event){console.log('clicked')}
  handleredirect(){
    this.setState({redirect: true});

  }


  render() {

    if (this.state.redirect) {
 return <Redirect push to={{
  pathname: '/setting2',
  state: { data: this.tableData }
}}/>;
}

    return (
      <>


 {<CModal
        show={this.state.showModal}
        onClose={() => this.modalToggle(false)}
      >
        <CModalHeader closeButton>
          <CModalTitle>Modal title</CModalTitle>
        </CModalHeader>
        <CModalBody>
         The setting file has been succefully read and analyzed by server. Click continue to view results
        </CModalBody>
        <CModalFooter>
          <CButton  onClick={() => this.handleredirect()} color="primary">Continue</CButton>{' '}
          <CButton
            color="secondary"
            onClick={() => this.modalToggle(false)}
          >Cancel</CButton>
        </CModalFooter>
 </CModal>}

      {<CRow>
        {<CCol xs="12" md="6">
          {<CCard>

            <CCardHeader>
              <h2>Settings Analyzer</h2>
            </CCardHeader>

            {<CCardBody>
              {<CForm onSubmit={this.handleSubmit}  encType="multipart/form-data" className="form-horizontal">

                {<CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Manufacturer</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect value={this.state.value} onChange={this.handleChange} custom name="select" id="select">
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
                    <CLabel htmlFor="selectLg">Scheme Type</CLabel>
                  </CCol>
                  <CCol xs="12" md="9" size="lg">
                    <CSelect custom size="lg" name="selectLg" id="selectLg">
                      <option value="0">----</option>
                      <option value="1">OPDS</option>
                      <option value="2">Non-OPDS</option>
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
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Over Current</CLabel>
                         </CFormGroup>
                         <CFormGroup variant="custom-checkbox" inline>
                            <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                            <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Whole Settings</CLabel>
                         </CFormGroup>
                  </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                     <CLabel col md="3" htmlFor="file-input">Setting File (Localy)</CLabel>
                       <CCol xs="12" md="9">
                          <CInputFile id="file-input" name="file-input" onChange={ this.handleChangeFile } />
                       </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                {<CFormGroup row>
                     <CLabel col md="3" htmlFor="file-input">Setting File (Remotely)</CLabel>
                       <CCol xs="12" md="9">
                          <CButton size="sm" color="info" onClick={this.uploadsettings}>
                          <CIcon name="cil-CloudDownload"/> Collect Settings</CButton>
                       </CCol>
                </CFormGroup>}

                {/*-----------------------------------------------------------------*/}

                <CButton   type="submit" size="sm" color="primary"><CIcon name="cil-Spreadsheet" /> Submit</CButton>
              </CForm>}

                {/*-----------------------------------------------------------------*/}

            </CCardBody>}

                {/*-----------------------------------------------------------------*/}

               {<CCardFooter>
                 {/* here is the footer of the entire box.
                  <CButton onClick={this.handleClick}  type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
                   <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton> */}
               </CCardFooter>}

                {/*-----------------------------------------------------------------*/}

          </CCard>}

                {/*-----------------------------------------------------------------*/}

        </CCol>}

                {/*-----------------------------------------------------------------*/}

      </CRow>}

    </>
  )
}
}

export default SettingsForm
