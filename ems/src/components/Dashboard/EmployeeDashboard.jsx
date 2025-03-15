import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard({data}) {
    
    return (
       <div className='p-10 h-screen'>
       <Header data={data}/>
       <TaskListNumber data={data}/>
       <TaskList data={data}/>
       </div>
    )
}

export default EmployeeDashboard
