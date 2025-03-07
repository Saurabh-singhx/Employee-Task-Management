import React from 'react'

function CompletedTask({data}) {
  return (
    <div className='bg-green-400 w-[24%] rounded-lg overflow-hidden shrink-0 flex flex-col justify-between h-96 tasks'>
    <div>
    <div className='flex items-center p-2 justify-between text-white font-semibold'>
      <span className='px-1 bg-rose-400 rounded-lg'>{data.category}</span>
      <span>{data.taskDate}</span>
    </div>
    <div className='px-4 mt-3 font-light'>
      <h2 className='text-white font-bold'>{data.taskTitle}</h2>
      <p className='text-white'>{data.taskDescription}</p>
    </div>
    </div>
    <div className='flex items-center justify-center p-4 text-lg text-gray-50 bg-lime-400'>completed</div>
  </div>
  )
}

export default CompletedTask
