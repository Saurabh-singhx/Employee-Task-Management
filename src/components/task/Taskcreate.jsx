import React, { useState } from 'react';

function Taskcreate() {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setasignTo] = useState('');
    const [category, settaskCategory] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    // Handle task creation
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!taskTitle || !taskDate || !asignTo || !category || !taskDescription) {
            alert("Please fill all the fields.");
            return;
        }

        const newTask = {
            taskTitle,
            taskDate,
            asignTo,
            category,
            taskDescription,
            accepted: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        const data = JSON.parse(localStorage.getItem('employees')) || [];
        const employeeIndex = data.findIndex(employee => employee.name === asignTo);

        if (employeeIndex !== -1) {
            // Add the new task to the corresponding employee
            data[employeeIndex].tasks.push(newTask);
            data[employeeIndex].taskNumbers.newTask += 1;
            // if(data[employeeIndex]) {
            localStorage.setItem('employees', JSON.stringify(data));
        } else {
            alert('Employee not found!');
        }

        // Clear form fields after submission
        setTaskTitle('');
        setTaskDate('');
        setasignTo('');
        settaskCategory('');
        setTaskDescription('');
    };

    return (
        <div className='bg-slate-800 w-full px-8 py-4 '>
            <form
                onSubmit={handleSubmit}
                className='flex justify-between bg-slate-700 px-2 rounded py-4'>
                <div className='flex flex-col gap-8 mt-4 px-4 w-2/3'>
                    <div className='w-full'>
                        <h3 className='text-white font-semibold text-lg'>Task title</h3>
                        <input 
                            value={taskTitle}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            type="text" 
                            placeholder='Task title' 
                            className='mt-2 w-1/2 h-8 rounded-md px-3 bg-transparent text-white text-lg border focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 border-green-400' 
                        />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold text-lg'>Date</h3>
                        <input 
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                            type="date" 
                            className='mt-2 w-1/2 h-8 rounded-md px-3 bg-transparent text-white text-lg border focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 border-green-400' 
                        />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold text-lg'>Assign to</h3>
                        <input
                             value={asignTo}
                             onChange={(e) => setasignTo(e.target.value)} 
                             type="text" 
                             placeholder='Employee Name' 
                             className='mt-2 w-1/2 h-8 rounded-md px-3 bg-transparent text-white text-lg border focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 border-green-400' 
                        />
                    </div>
                    <div>
                        <h3 className='text-white font-semibold text-lg'>Category</h3>
                        <input 
                            value={category}
                            onChange={(e) => settaskCategory(e.target.value)}
                            type="text" 
                            placeholder='Design, Dev, etc.' 
                            className='mt-2 w-1/2 h-8 rounded-md px-3 bg-transparent text-white text-lg border focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 border-green-400' 
                        />
                    </div>
                </div>
                <div className='flex flex-col px-4'>
                    <h3 className='text-white font-semibold text-lg'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                        cols="60" 
                        rows="10" 
                        className='rounded-md p-4 mt-1 bg-transparent border-2 text-white text-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300 border-green-400 hover:bg-slate-600'
                    ></textarea>
                    <button className='mt-6 bg-lime-400 h-10 rounded-md text-white font-semibold text-lg hover:bg-lime-500 transition duration-200'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Taskcreate;
