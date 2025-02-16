import React from 'react'
import Header from '../Header'
import Employeeui from '../Employeeui'
import EmployeeAllTask from '../EmployeeAllTask'

function Employee(props) {
  return (
     <div className='overflow-x-auto w-full'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Employeeui data={props.data}/>
        <EmployeeAllTask data={props.data}/>
     </div>
  )
}

export default Employee
