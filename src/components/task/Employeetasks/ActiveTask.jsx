import React, { useState } from 'react'

function ActiveTask(props) {
  const [checkClick, setCheckClick] = useState(false);
  const [checkFail, setCheckFail] = useState(false);
  const employeesData = JSON.parse(localStorage.getItem("employees"));
  const index = props.val.id;

  const handleCompleteTask = (e) => {
    setCheckClick(true);
    e.preventDefault();
    employeesData[index - 1].tasks.forEach(element => {
      if (element.taskTitle === props.data.taskTitle) {
        element.completed = true;
        element.accepted = false;
      }
    });
    employeesData[index - 1].taskNumbers.completed += 1;
    employeesData[index - 1].taskNumbers.active -= 1;
    localStorage.setItem('employees', JSON.stringify(employeesData));
  };

  const handleFailTask = (e) => {
    setCheckFail(true);
    e.preventDefault();
    employeesData[index - 1].tasks.forEach(element => {
      if (element.taskTitle === props.data.taskTitle) {
        element.failed = true;
        element.accepted = false;
      }
    });
    employeesData[index - 1].taskNumbers.failed += 1;
    employeesData[index - 1].taskNumbers.active -= 1;
    localStorage.setItem('employees', JSON.stringify(employeesData));
  };

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
      {
        checkClick ? (
          <div className='flex items-center justify-center p-4 text-lg text-gray-50 bg-lime-400'>Completed</div>
        ) : checkFail ? (
          <div className='flex items-center justify-center p-4 text-lg text-gray-50 bg-red-400'>Failed</div>
        ) : (
          <div className='mt-8 p-8 flex justify-between'>
            <button
              onClick={handleCompleteTask}
              className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Accept Task</button>
            <button
              onClick={handleFailTask}
              className='py-2 px-4 bg-red-600 border rounded-full text-white'>Fail Task</button>
          </div>
        )
      }
    </div>
  );
}

export default ActiveTask;
