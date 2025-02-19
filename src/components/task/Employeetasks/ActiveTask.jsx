import React, { useState } from 'react'
import { AuthContext } from '../../Context/Authprovider';
import { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function ActiveTask(props) {

  const { userdata, setUserdata } = useContext(AuthContext);

  const [checkClick, setCheckClick] = useState(false);
  const [checkFail, setCheckFail] = useState(false);
  const handleCompleteTask = (e) => {
    e.preventDefault();
    setCheckClick(true);
    const taskid = props.taskId;
    userdata.employees.forEach(element => {
      if(element.id === props.value.id){
        const s = userdata.employees.indexOf(element);
        console.log(userdata.employees[s].taskNumbers);
        userdata.employees[s].taskNumbers.completed += 1;
        userdata.employees[s].taskNumbers.accepted -= 1;
        userdata.employees[s].tasks[taskid].completed = true;
        userdata.employees[s].tasks[taskid].accepted = false;
        setUserdata({...userdata});
      }
    });
    toast.success('Task Completed');
  };

  const handleFailTask = (e) => {
    setCheckFail(true);
    e.preventDefault();
    const taskid = props.taskId;
    userdata.employees.forEach(element => {
      if(element.id === props.value.id){
        const s = userdata.employees.indexOf(element);
        console.log(userdata.employees[s].taskNumbers);
        userdata.employees[s].taskNumbers.failed += 1;
        userdata.employees[s].taskNumbers.accepted -= 1;
        userdata.employees[s].tasks[taskid].failed = true;
        userdata.employees[s].tasks[taskid].accepted = false;
        setUserdata({...userdata});
      }
    });
    toast.error('Task Failed');
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
              className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Complete Task</button>
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
