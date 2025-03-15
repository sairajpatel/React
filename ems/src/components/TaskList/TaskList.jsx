import React from 'react'
import AcceptTask from './AcceptTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'

function TaskList({data}) {
    return (
        <div id='tasklist' className='h-[45%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5  mt-10 '>
        {data.tasks.map((elem,key)=>{
          if(elem.active){
           return <AcceptTask key={key} data={elem}/>
          }
          if(elem.completed){
          
            return <CompleteTask key={key} data={elem}/>
          
           

          }
         if(elem.new_task){
          
            return <NewTask key={key} data={elem}/>;
``            
         }
         if(elem.failed){
            return <FailedTask key={key} data={elem}/>
         }
        })}

           
            
        
        </div>
    )
}

export default TaskList
