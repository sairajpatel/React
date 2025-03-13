import React from 'react'

function TaskListNumber() {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='h-40 w-[45%] rounded-xl py-6 px-9 bg-red-400'>
                <h2 className='text-3xl font-semibold bg-red-400'>0</h2>
                <h3 className='text-xl font-medium bg-red-400'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] rounded-xl py-6 px-9 bg-blue-400'>
                <h2 className='text-3xl font-semibold bg-blue-400'>0</h2>
                <h3 className='text-xl font-medium bg-blue-400'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] rounded-xl py-6 px-9 bg-green-400'>
                <h2 className='text-3xl font-semibold bg-green-400'>0</h2>
                <h3 className='text-xl font-medium bg-green-400'>New Task</h3>
            </div>
            <div className='h-40 w-[45%] rounded-xl py-6 px-9 bg-yellow-400'>
                <h2 className='text-3xl font-semibold bg-yellow-400'>0</h2>
                <h3 className='text-xl font-medium bg-yellow-400'>New Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumber
