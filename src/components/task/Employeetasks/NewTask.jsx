import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/Authprovider';
import toast, { Toaster } from 'react-hot-toast';

function NewTask(props) {
  const { userdata, setUserdata } = useContext(AuthContext);
  const [checkClick, setcheckClick] = useState(false)
  
  const handleActiveTask = (e) => {
    e.preventDefault();
    setcheckClick(true)
    const taskid = props.taskId;

    userdata.employees.forEach(element => {
      if(element.id === props.value.id){
        const s = userdata.employees.indexOf(element);
        userdata.loggedinuser.data.tasks[taskid].accepted = true;
        userdata.loggedinuser.data.tasks[taskid].newTask = false;
        userdata.employees[s].taskNumbers.accepted += 1;
        userdata.employees[s].taskNumbers.newTask -= 1;
        userdata.employees[s].tasks[taskid].accepted = true;
        userdata.employees[s].tasks[taskid].newTask = false;
        userdata.loggedinuser.data.taskNumbers.newTask = userdata.employees[s].taskNumbers.newTask;
        userdata.loggedinuser.data.taskNumbers.accepted = userdata.employees[s].taskNumbers.accepted;
        setUserdata({...userdata});
      }
    });
    toast.success('Task Accepted Successfully');
    
  }
  return (
    <div className='bg-sky-400 w-[24%] rounded-lg overflow-hidden shrink-0 flex flex-col justify-between h-96 tasks'>
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
