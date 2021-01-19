import React, { lazy, useEffect, useState, Component } from 'react'
import { Redirect } from 'react-router';
import {urls} from "../../../urls";
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
// 'id'
,'substation'
,'bay_number'
,'manufacturer'
// ,'scheme_type'
// ,'serial_number'
// ,'function_type'
,'creation_date',
'created_by'
]

const Collected_Data= () => {
  const  [data, setData] = useState();
  const  [tabledata, settableData] = useState(0);
  const  [redirect, setredirect] = useState(false);

  let redirect_id = 0;

  useEffect(() => {

    axios.get(urls.api + 'dashboard/setting/')
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
    axios.get(urls.api + `dashboard/setting/${redirect_id}`).then(
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
     pathname: '/setting2',
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

            <CCol sm="7" className=" d-md-block">
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
                onRowClick={handleclick }
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



        {/* <CCol>
          <CCard>
            <CCardBody>



              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>No.</th>

                    <th>User</th>

                    <th>S/S</th>

                    <th>Bay Number</th>

                    <th>Manufacturer</th>

                    <th>Relay Type</th>

                    <th>Serial No.</th>

                    <th>Date</th>

                    <th></th>

                  </tr>
                </thead>

                <tbody>


                  <tr>
                    <td>
                       <div>1</div>
                       <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                      <div>Rakan A. Hakami</div>
                      <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                       <div className="clearfix">
                         <strong>KMT</strong>
                       </div>
                     </td>

                     <td>
                      <strong>  AD03  </strong>
                     </td>

                     <td>
                      <strong>  SEL  </strong>
                     </td>

                     <td>
                      <strong>  SEL-411L  </strong>
                     </td>

                     <td>
                      <strong> SEL12457814563 </strong>
                     </td>

                     <td>
                      <strong>11.11.2020</strong>
                      </td>

                     <td>
                      <CRow>
                        <CCol xs="3">
                          <CButton to="" color="primary" className="px-1">More</CButton>
                        </CCol>

                      </CRow>
                     </td>
                  </tr>


                  <tr>
                    <td>
                       <div>2</div>
                       <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                      <div>Rakan A. Hakami</div>
                      <div className="small text-muted">
                      </div>
                    </td>

                    <td>
                       <div className="clearfix">
                         <strong>KMT</strong>
                       </div>
                     </td>

                     <td>
                      <strong>  AH14  </strong>
                     </td>

                     <td>
                      <strong>  SEL  </strong>
                     </td>

                     <td>
                      <strong>  SEL-751  </strong>
                     </td>

                     <td>
                      <strong> SEL12457814563 </strong>
                     </td>

                     <td>
                      <strong>11.11.2020</strong>
                      </td>

                     <td>
                      <CRow>
                        <CCol xs="3">
                          <CButton to="" color="primary" className="px-1">More</CButton>
                        </CCol>

                      </CRow>
                     </td>
                  </tr>




                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol> */}

    </>
  )
}

export default Collected_Data
