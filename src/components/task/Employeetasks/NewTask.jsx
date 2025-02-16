import React, { useState } from 'react'

function NewTask(props) {

  // console.log(data);
  // console.log(elem);
  const [checkClick, setcheckClick] = useState(false)
  const employeesData = JSON.parse(localStorage.getItem("employees"))
  const index = props.val.id;
  // console.log(props);
  // console.log(employeesData[index - 1]);

  const handleActiveTask = (e) => {
    setcheckClick(true)
    e.preventDefault();
    employeesData[index - 1].tasks.forEach(element => {
      // console.log(element.taskTitle);
      // console.log(props.data.taskTitle);
      if (element.taskTitle === props.data.taskTitle) {
        // console.log('task matched');
        element.newTask = false;
        element.accepted = true;
      }
    });
    employeesData[index - 1].taskNumbers.accepted += 1;
    employeesData[index - 1].taskNumbers.newTask -= 1;
    props.settaskdata({ accepted: (employeesData[index - 1].taskNumbers.accepted), completed: employeesData[index - 1].taskNumbers.completed, failed: employeesData[index - 1].taskNumbers.failed, newTask: employeesData[index - 1].taskNumbers.newTask })
    localStorage.setItem('employees', JSON.stringify(employeesData));
    // window.location.reload();
  }
  return (
    <div className='bg-sky-400 w-[24%] rounded-lg overflow-hidden shrink-0 flex flex-col justify-between h-96'>
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
        checkClick ? <div className='flex items-center justify-center p-4 text-lg text-gray-50 bg-lime-400'>Accepted</div> : <div className='mt-8 p-8 flex justify-between'>
          <button
            onClick={handleActiveTask}
            className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Accept Task</button>
        </div>
      }
    </div>
  )
}

export default NewTask
