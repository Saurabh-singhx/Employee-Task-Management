import React from 'react'
import NewTask from './task/Employeetasks/NewTask'
import ActiveTask from './task/Employeetasks/ActiveTask'
import CompletedTask from './task/Employeetasks/CompletedTask'
import FailedTask from './task/Employeetasks/FailedTask'

export default function EmployeeAllTask({ data }) {
  // Ensure data and tasks exist before trying to map
  if (!data || !Array.isArray(data.tasks)) {
    return <div>No tasks available</div>;
  }
  // console.log(data)

  return (
    <div id='taskbar' className='py-4 flex gap-4 overflow-x-auto px-8 w-full'>
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} val={data}/>
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        if (elem.accepted) {
          return <ActiveTask key={idx} data={elem} val={data}/>
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem} />
        }

      })}
    </div>
  );
}


