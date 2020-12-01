import React, { lazy, useEffect, useState } from 'react'
import {
  CCardGroup,
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
  CCallout,
  CModal,
  CModalBody,
  CModalHeader,
  CModalFooter,
  CModalTitle
} from '@coreui/react'

import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea
} from '@coreui/react-chartjs'

import axios from 'axios'

import CIcon from '@coreui/icons-react'
import MainChartExample from '../charts/MainChartExample.js'
const doughnutoption = {
  plugins: {


    datalabels: {
      formatter: function (value, ctx) {

        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(function (data) {
          sum += data;
        });
        let percentage = (value * 100 / sum).toFixed(2) + "%";
        if ((value * 100 / sum) < 4) {
          percentage = '';
        }
        return percentage;


      },
      color: '#fff',
      display: 'auto'
    }

  }
  ,
  tooltips: {
    callbacks: {
      label: function (tooltip, data) {
        let label = ''

        label = label + data.labels[tooltip.index] + ' : '
        label = label + data.datasets[0].data[tooltip.index] + ' ('
        let perc = 100 * (data.datasets[0].data[tooltip.index]) / (data.datasets[0].data.reduce((i, j) => (i + j), 0))
        label = label + Math.round(perc * 100) / 100 + '%)'
        return label
      }
    }
  },
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'month'
      }
    }
    ]
  }
}
const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

// const doughnutoption = {
//   plugins: {


//     datalabels: {
//       formatter: function (value, ctx) {

//         let sum = 0;
//         let dataArr = ctx.chart.data.datasets[0].data;
//         dataArr.map(function (data) {
//           sum += data;
//         });
//         let percentage = (value * 100 / sum).toFixed(2) + "%";
//         if ((value * 100 / sum) < 4) {
//           percentage = '';
//         }
//         return percentage;


//       },
//       color: '#fff',
//       display: 'auto'
//     }

//   }
//   ,
//   tooltips: {
//     callbacks: {
//       label: function (tooltip, data) {
//         let label = ''

//         label = label + data.labels[tooltip.index] + ' : '
//         label = label + data.datasets[0].data[tooltip.index] + ' ('
//         let perc = 100 * (data.datasets[0].data[tooltip.index]) / (data.datasets[0].data.reduce((i, j) => (i + j), 0))
//         label = label + Math.round(perc * 100) / 100 + '%)'
//         return label
//       }
//     }
//   },
//   scales: {
//     xAxes: [{
//       type: 'time',
//       time: {
//         unit: 'month'
//       }
//     }
//     ]
//   }
// }

const Dashboard = () => {
  const [chart_data, setChartData] = useState()
  const [chart_data2, setChartData2] = useState()
  const [chart_labels, setChartlabels] = useState()
  useEffect(() => {

    axios.get('http://localhost:8000/dashboard/chart/')
    .then(function (response) {
      console.log(response);
      setChartData(response.data)
      

   })
    .catch(function (error) {
      console.log(error);
    });
    axios.get('http://localhost:8000/dashboard/chart2/')
    .then(function (response) {
      console.log(response);
      setChartData2(response.data[1])
      setChartlabels(response.data[0])
      

   })
    .catch(function (error) {
      console.log(error);
    });


  }, [])
  return (
    <>

      {<CCardGroup columns className="cols-2" >

        {
          <CCard>

            <CCardHeader>
              <h2>Collected Data</h2>
            </CCardHeader>

            <CCardBody>
              <CChartBar
                type="bar"
                datasets={[
                  {
                    label: 'Number of Relays',
                    backgroundColor: '#f87979',
                    data:  chart_data   //[{t: '2020-1-1', y: 20}, {t: '2020-3-1', y: 20}, {t: '2020-2-1', y: 20}]
                  }
                ]}
                labels="months"
                options={{
                  tooltips: {
                    enabled: true
                  }
                }}
              />

            </CCardBody>

            <CCardFooter>
            </CCardFooter>

          </CCard>
        }


        {
          <CCard>

            <CCardHeader>
              <h2>Manufacturers</h2>
            </CCardHeader>

            <CCardBody>
              <CChartDoughnut
                type="doughnut"
                datasets={[
                  {
                    backgroundColor: [
                      '#41B883',
                      '#E46651',
                      '#00D8FF',
                      '#DD1B16',
                      '#'
                    ],
                    data: chart_data2
                  }
                ]}
                labels= { chart_labels} //{['SEL', 'Siemens', 'ABB', 'GE', 'ZIV']}
                options={{
                  tooltips: {
                    enabled: true
                  }
                }}
              />
            </CCardBody>

            <CCardFooter>
            </CCardFooter>

          </CCard>
        }

      </CCardGroup>
      }

      {
        <CCard>

          <CCardBody>
            <WidgetsDropdown />
          </CCardBody>

        </CCard>
      }

    </>
  )
}

export default Dashboard
