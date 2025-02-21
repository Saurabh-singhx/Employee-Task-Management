import React, { useEffect, useState } from 'react'
import NewTask from './task/Employeetasks/NewTask'
import ActiveTask from './task/Employeetasks/ActiveTask'
import CompletedTask from './task/Employeetasks/CompletedTask'
import FailedTask from './task/Employeetasks/FailedTask'
import { use } from 'react'

export default function EmployeeAllTask({ data }) {
  // Ensure data and tasks exist before trying to map
  if (!data || !Array.isArray(data.tasks)) {
    return <div>No tasks available</div>;
  }

  return (
    <div className='py-4 flex gap-5 overflow-x-auto px-8 taskbar w-screen'>
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} value={data} taskId={idx}/>
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />
        }
        if (elem.accepted) {
          return <ActiveTask key={idx} data={elem} value={data} taskId={idx}/>
        }
        if (elem.completed) {
          return <CompletedTask key={idx} data={elem} />
        }

      })}
    </div>
  );
}


