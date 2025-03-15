import React from 'react'

function NewTask({data}) {
    return (
        <div className=' flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '>
        <div className='flex justify-between items-center py-4 px-2'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.task_date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold px-4'>{data.task_title}</h2>
        <p className='text-sm mt-2 px-4'>
        {data.task_description}        </p>
        <div className='flex justify-between items-center mt-4'>
                    <button className='bg-green-700 px-2 py-1 text-sm rounded-lg'>Mark as Completed</button>
                    <button className='bg-red-700 px-2 py-1 text-sm rounded-lg'>Mark as Failed</button>

                </div>

    </div>
    )
}

export default NewTask
