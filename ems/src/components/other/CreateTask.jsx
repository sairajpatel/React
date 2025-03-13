import React from 'react'

function CreateTask() {
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'> 
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a Task'/>
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input type="date"className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input type="text" placeholder='employee name'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input type='text' placeholder='design,dev,etc'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'/>
            </div>
            </div>
           <div className='w-1/2'>
           <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
           <textarea name="" id="" cols="30" rows="10"className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'/>
           <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
           </div>
           
           
            
      
           
            
            
        </form>
    </div>
    )
}

export default CreateTask
