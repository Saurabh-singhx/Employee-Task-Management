import React from 'react'

function ActiveTask(props) {

  // const handleCompleteTask=(e)=>{
  //   e.preventDefault()
  // }

  return (
    <div className='bg-yellow-400 w-1/4 h-60 rounded-lg gap-2 overflow-hidden shrink-0'>
        <div className='flex items-center p-2 justify-between text-white font-semibold'>
          <span className='px-1 bg-rose-400 rounded-lg'>{props.data.category}</span>
          <span>{props.data.taskDate}</span>
        </div>
        <div className='px-4 mt-3 font-light'>
          <h2 className='text-white font-bold'>{props.data.taskTitle}</h2>
          <p className='text-white'>{props.data.taskDescription}</p>
        </div>
        <div className='mt-8 p-8 flex justify-between'>
          {/* <button
            onClick={handleCompleteTask}
          className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Completed</button>
          <button className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Mark Failed</button> */}
          
        </div>


      </div>
  )
}

export default ActiveTask
