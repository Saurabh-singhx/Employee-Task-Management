import React, { useContext, useState } from 'react'


function ActiveTask(props) {
  const employeesData = JSON.parse(localStorage.getItem("employees"))
  const index = props.val.id;
  console.log(props.data);
  // console.log(employeesData[index-1]);

  const handleCompleteTask = (e) => {
    e.preventDefault();
    employeesData[index - 1].taskNumbers.completed = 0;
    localStorage.setItem('employees', JSON.stringify(employeesData));
    window.location.reload();
  }

  return (
    <div className='bg-yellow-400 w-[24%] rounded-lg gap-2 overflow-hidden flex flex-col shrink-0 justify-between h-96'>
      <div>
        <div className='flex items-center p-2 justify-between text-white font-semibold'>
          <span className='px-1 bg-rose-400 rounded-lg'>{props.data.category}</span>
          <span>{props.data.taskDate}</span>
        </div>
        <div className='px-4 mt-3 font-light'>
          <h2 className='text-white font-bold'>{props.data.taskTitle}</h2>
          <p className='text-white'>{props.data.taskDescription}</p>
        </div>
      </div>
      <div className='mt-8 p-8 flex justify-between'>
        <button
          onClick={handleCompleteTask}
          className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Completed</button>
        <button className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Mark Failed</button>

      </div>


    </div>
  )
}

export default ActiveTask
