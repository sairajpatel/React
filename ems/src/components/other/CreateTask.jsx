import {React,useState} from 'react'

function CreateTask() {
    const [taskTitle,setTasktitle]=useState('');
    const [taskDate,setTaskDate]=useState('');
    const [taskAssign,setTaskAssign]=useState('');
    const [taskCategory,setTaskCategory]=useState('');
    const [taskDesc,setTaskDesc]=useState('');
    const [task,settask]=useState({});
    
    const submitHandler=(e)=>{
        e.preventDefault();
        settask({taskTitle,taskDate,taskAssign,taskCategory,taskDesc,active:false,completed:false,newTask:true,failed:false});
        console.log(task);
        setTaskAssign('');
        setTaskCategory('');
        setTaskDate('');
        setTaskDesc('');
        setTasktitle('');
        
        

    }
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'> 
        <form onSubmit={(e)=>{
            submitHandler(e);
        }} className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' 
            onChange={((e)=>{
                setTasktitle(e.target.value);
            })}
            value={taskTitle}
            
            type="text" placeholder='Make a Task'/>
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
            <input type="date"className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
            value={taskDate}
            onChange={((e)=>{
                 setTaskDate(e.target.value);
            })}
            />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
            <input type="text" placeholder='employee name'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
            value={taskAssign}
            onChange={((e)=>{
                setTaskAssign(e.target.value);

            })}
            
            />
            </div>
            <div>
            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input type='text' placeholder='design,dev,etc'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
            value={taskCategory}
            onChange={((e)=>{
                setTaskCategory(e.target.value);
            })}
            
            />
            </div>
            </div>
           <div className='w-1/2'>
           <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
           <textarea name="" id="" cols="30" rows="10"className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
           value={taskDesc}
           onChange={((e)=>{
            setTaskDesc(e.target.value);
           })}
           
           />
           <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
           </div>
           
           
            
      
           
            
            
        </form>
    </div>
    )
}

export default CreateTask
