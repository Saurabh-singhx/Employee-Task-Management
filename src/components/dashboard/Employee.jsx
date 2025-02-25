import React, { useState } from 'react'
import Header from '../Header'
import Employeeui from '../Employeeui'
import EmployeeAllTask from '../EmployeeAllTask'

function Employee({data,changeUser}) {
   // console.log(setLog);
  return (
     <div className='flex flex-col items-center'>
        <Header changeUser={changeUser} data={data}/>
        <Employeeui Taskdata={data}/>
        <EmployeeAllTask data={data}/>
     </div>
  )
}
export default Employee
