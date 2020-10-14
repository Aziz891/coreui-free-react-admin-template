import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>

      <div>
        <a>This project is incubated in <b>Innovation Energy Incubator</b> - Saudi Electricity Company</a>
        <span></span>
      </div>

      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <b>Relay Pioneers</b>
      </div>

    </CFooter>
  )
}

export default React.memo(TheFooter)
