import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { AuthContext } from '../Context/Authprovider'

function Aalltask() {
    const { userdata, setUserdata } = useContext(AuthContext);

        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
          setTimeout(() => setIsVisible(true), 100); // Small delay to trigger fade-in
        }, []);
      
      
    return (
        <div
      className={`p-8 h-screen rounded-lg transition-opacity duration-1000 shrink-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
            <div className='bg-slate-700 flex justify-between h-14 rounded-md items-center py-2 px-8 mb-2 Text gap-4'>
                <h2 className='text-white font-medium w-1/5 flex items-center justify-center '>Employee Name</h2>
                <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>New Task</h3>
                <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>Active Task</h3>
                <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>Completed Task</h3>
                <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>Failed</h3>
            </div>

            <div className=' rounded-lg h-44 py-2'>
                {userdata.employees.map((e,idx) => {
                    return <div 
                    key={idx}
                    className='bg-slate-700 flex justify-between h-14 rounded-md items-center py-2 px-8 mb-2'>
                        <h2 className='text-white font-medium w-1/5 flex items-center justify-center'>{e.name}</h2>
                        <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>{e.taskNumbers.newTask}</h3>
                        <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>{e.taskNumbers.accepted}</h3>
                        <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>{e.taskNumbers.completed}</h3>
                        <h3 className='text-white font-medium w-1/5 flex items-center justify-center'>{e.taskNumbers.failed}</h3>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Aalltask
