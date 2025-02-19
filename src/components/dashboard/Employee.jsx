import React, { useState } from 'react'
import Header from '../Header'
import Employeeui from '../Employeeui'
import EmployeeAllTask from '../EmployeeAllTask'

function Employee({data,changeUser}) {

  return (
     <div className='overflow-x-auto w-full'>
        <Header changeUser={changeUser} data={data}/>
        <Employeeui Taskdata={data}/>
        <EmployeeAllTask data={data} />
     </div>
  )
}
export default Employee
