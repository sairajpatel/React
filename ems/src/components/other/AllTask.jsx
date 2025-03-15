import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {
    const authData=useContext(AuthContext);
   
   
   
    return (
        <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
             <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded '>
            <h2 className='w-1/5 text-emerald-600 font-bold'>Employee name</h2>
            <h3 className='w-1/5 text-emerald-600 font-bold'>New Task</h3>
            <h3 className='w-1/5 text-emerald-600 font-bold'>Active Task</h3>
            <h3 className='w-1/5 text-emerald-600 font-bold'>Completed</h3>
            <h3 className='w-1/5 text-emerald-600 font-bold'>Failed</h3>
             </div>
            {authData.employees.map(function(elem,idx){
                return <div key={idx} className='bg-black-400 mb-2 py-2 px-4 flex justify-between h-55'>
                       <h2 className='w-1/5'>{elem.firstName}</h2>
                       <h3  className='w-1/5 text-blue-600'>{elem.taskCounts.new_task}</h3>
                       <h5  className='w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
                       <h5 className='w-1/5 text-green-800'>{elem.taskCounts.completed}</h5>
                       <h5  className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
            })
          
           }
           
          

        </div>
    )
}

export default AllTask
