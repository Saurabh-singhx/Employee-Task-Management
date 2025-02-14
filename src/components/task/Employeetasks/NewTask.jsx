import React from 'react'

function NewTask({data}) {
  return (
    <div className='bg-sky-400 w-1/4 h-60 rounded-lg overflow-hidden shrink-0'>
        <div className='flex items-center p-2 justify-between text-white font-semibold'>
          <span className='px-1 bg-rose-400 rounded-lg'>{data.category}</span>
          <span>{data.taskDate}</span>
        </div>
        <div className='px-4 mt-3 font-light'>
          <h2 className='text-white font-bold'>{data.taskTitle}</h2>
          <p className='text-white'>{data.taskDescription}</p>
        </div>
        <div className='mt-8 p-8'>
          <button className='py-2 px-4 bg-slate-600 border rounded-full text-white'>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask
