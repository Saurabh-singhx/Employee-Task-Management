import React from 'react'

export default function Employeeui({Taskdata}) {
    
    // console.log(Taskdata)
  return (

    <div className='flex flex-col w-full bg-slate-800 px-8 h-40 '>
            
          <div className='mt-4 flex gap-4 py-2 h-80'>
              <div className='bg-cyan-400 rounded-md w-1/4 p-3 h-28 Tasknumbers flex flex-col justify-between'>
                  <p className='text-white font-semibold text-2xl'>{Taskdata.taskNumbers.newTask}</p>
                  <p className='text-amber-200 font-bold text-2xl'>New Task</p>
              </div>
              <div className='bg-yellow-400 rounded-md w-1/4 p-3 h-28 Tasknumbers flex flex-col justify-between'>
                  <p className='text-white font-semibold text-2xl'>{Taskdata.taskNumbers.accepted}</p>
                  <p className='text-green-200 font-bold text-2xl'>Active Task</p>
              </div>
              <div className='bg-green-400 rounded-md w-1/4 p-3 h-28 Tasknumbers flex flex-col justify-between'>
                  <p className='text-white font-semibold text-2xl'>{Taskdata.taskNumbers.completed}</p>
                  <p className='text-amber-200 font-bold text-2xl'>completed Task</p>
              </div>
              <div className='bg-red-300 rounded-md w-1/4 p-3 h-28 Tasknumbers flex flex-col justify-between'>
                  <p className='text-white font-semibold text-2xl'>{Taskdata.taskNumbers.failed}</p>
                  <p className='text-amber-200 font-bold text-2xl'>failed Task</p>
              </div>
          </div>
          

      </div>
  )
}
