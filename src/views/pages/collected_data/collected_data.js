import React, { lazy, useEffect, useState, Component } from 'react'
import { Redirect } from 'react-router';
import {
   CContainer,
   CRow,
   CCard,
   CCardHeader,
   CCardBody,
   CCardFooter,
   CCol,
   CButton,
} from '@coreui/react'
import {
  CBadge,
  CDataTable,
} from '@coreui/react'
import axios from 'axios'
import CIcon from '@coreui/icons-react'
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
  const  [tabledata, settableData] = useState(0);
  const  [redirect, setredirect] = useState(false);

  let redirect_id = 0;

  useEffect(() => {

    axios.get('http://localhost:8000/dashboard/setting/')
    .then(function (response) {
      console.log(response);
      setData(response.data)

   })
    .catch(function (error) {
      console.log(error);
    });

  }
   , [])

  const  handleclick = e => {
    redirect_id = e.id
    axios.get(`http://localhost:8000/dashboard/setting/${redirect_id}`).then(
      res => {
        console.log("herrr", res.data.param)
        settableData(res.data.param)
        console.log(e)
        setredirect(true)
      }
      )

  }
  if (redirect) {
    return  <Redirect push to={{
     pathname: '/setting_showing',
     state: { data: tabledata }
   }}/>;
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
                onRowClick={handleclick}
                pagination
                // scopedSlots = {{
                //   'Flags':
                //     (item)=>(
                //       <td>
                //         <CBadge color={getBadge(item.Flags)}>
                //           {item.Flags}
                //         </CBadge>
                //       </td>
                //     )
                // }}
              />
              </CCardBody>
            </CCard>

    </>
  )
}

export default Collected_Data
