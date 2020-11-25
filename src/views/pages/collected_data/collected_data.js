import React, { lazy, useEffect, useState } from 'react'
import {
   CContainer,
   CRow,
   CCard,
   CCardHeader,
   CCardBody,
   CCardFooter,
   CCol,
   CButton,
   CBadge,
   CDataTable
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

let fields = [
'id'
,'substation'
,'bay_number'
,'manufacturer'
,'scheme_type'
,'serial_number'
,'function_type'
,'creation_date',
'created_by'
]
const Collected_Data= () => {
  const  [data, setData] = useState();
  let history = useHistory()
  
  useEffect(() => {
    
    axios.get('http://localhost:8000/dashboard/setting/')
    .then(function (response) {
      console.log(response);
      setData(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  } , [])
  const handleredirect = (e) => {

    console.log(e)
    
    history.push('/Settings_Parameters');

    
}
  return (
    <>

<CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h2 id="collect" className="card-title mb-0">Collected Data</h2>
            </CCol>

            <CCol sm="7" className="d-none d-md-block">
              <CButton to="/settings_info" color="success" className="float-right" active tabIndex={-1}>
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
              <CDataTable
                items={data}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={30}
                onRowClick={(e) => handleredirect(e) }
                pagination />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </>
  )
}

export default Collected_Data
