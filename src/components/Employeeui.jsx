import React from 'react'

export default function Employeeui({data}) {
    
  return (

    <div className='flex flex-col w-full bg-slate-800 px-8 h-40'>
            
          <div className='mt-4 flex gap-4 py-2 h-80'>
              <div className='bg-cyan-400 rounded-md w-1/4 p-3 h-28'>
                  <p className='text-white font-semibold'>{data.taskNumbers.newTask}</p>
                  <p className='text-amber-200'>New Task</p>
              </div>
              <div className='bg-yellow-400 rounded-md w-1/4 p-3 h-28'>
                  <p className='text-white font-semibold'>{data.taskNumbers.accepted}</p>
                  <p className='text-amber-200'>Active Task</p>
              </div>
              <div className='bg-green-400 rounded-md w-1/4 p-3 h-28'>
                  <p className='text-white font-semibold'>{data.taskNumbers.completed}</p>
                  <p className='text-amber-200'>completed Task</p>
              </div>
              <div className='bg-red-300 rounded-md w-1/4 p-3 h-28'>
                  <p className='text-white font-semibold'>{data.taskNumbers.failed}</p>
                  <p className='text-amber-200'>failed Task</p>
              </div>
          </div>
          

      </div>
  )
}
