import React, { useState } from 'react'
import Header from '../Header'
import Employeeui from '../Employeeui'
import EmployeeAllTask from '../EmployeeAllTask'

function Employee({data,changeUser}) {
   const [dataempo, setdataempo] = useState({accepted:(data.taskNumbers.accepted),completed:data.taskNumbers.completed,failed:data.taskNumbers.failed,newTask:data.taskNumbers.newTask})
   console.log(dataempo)
  return (
     <div className='overflow-x-auto w-full'>
        <Header changeUser={changeUser} data={data}/>
        <Employeeui data={data} Taskdata={dataempo}/>
        <EmployeeAllTask data={data} settaskdata={setdataempo}/>
     </div>
  )
}
// changeUser={props.changeUser}
export default Employee
