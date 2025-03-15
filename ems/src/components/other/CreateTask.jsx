import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

function CreateTask() {
    const {userData, setUserData} = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskAssign, setTaskAssign] = useState('');
    const [taskCategory, setTaskCategory] = useState('');
    const [taskDesc, setTaskDesc] = useState('');

    // Ensure localStorage has valid data
    const data = JSON.parse(localStorage.getItem('employees')) || [];

    const submitHandler = (e) => {
        e.preventDefault();
    
        console.log("Submitting task...");
    
        // Get latest employee data from localStorage
        let storedData = JSON.parse(localStorage.getItem('employees')) || [];
        console.log("Before update (LocalStorage):", storedData);
    
        if (!Array.isArray(storedData)) {
            console.error("❌ Error: Local storage 'employees' is not an array!");
            return;
        }
    
        // Create a new task object
        const newTask = {
            taskTitle,
            taskDate,
            taskCategory,
            taskDesc,
            active: false,
            completed: false,
            newTask: true,
            failed: false,
        };
    
        // Find the assigned employee and update their tasks
        let updatedData = storedData.map((employee) => {
            if (employee.firstName === taskAssign) {
                console.log(`✅ Found employee: ${employee.firstName}, Adding task...`);
                return {
                    ...employee,
                    tasks: [...(employee.tasks || []), newTask], // Ensure tasks array exists
                };
            }
            return employee;
        });
    
        console.log("Updated employee list:", updatedData);
    
        // Save updated data to localStorage
        localStorage.setItem('employees', JSON.stringify(updatedData));
        console.log("After update (LocalStorage):", JSON.parse(localStorage.getItem('employees')));
    
        // Update React Context state
        setUserData(updatedData);
    
        // Clear input fields
        setTaskTitle('');
        setTaskDate('');
        setTaskAssign('');
        setTaskCategory('');
        setTaskDesc('');
    };
    
    
    return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={submitHandler} className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    {/* Task Title */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
                            onChange={(e) => setTaskTitle(e.target.value)}
                            value={taskTitle}
                            type="text"
                            placeholder='Make a Task'
                        />
                    </div>

                    {/* Date */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            type="date"
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
                            value={taskDate}
                            onChange={(e) => setTaskDate(e.target.value)}
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <select
                            required
                            value={taskAssign}
                            onChange={(e) => setTaskAssign(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
                        >
                            <option value="">Select an employee</option>
                            {data.map((elem, key) => (
                                <option key={key} value={elem.firstName}>
                                    {elem.firstName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            type='text'
                            placeholder='design, dev, etc'
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'
                            value={taskCategory}
                            onChange={(e) => setTaskCategory(e.target.value)}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className='w-1/2'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea
                        className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'
                        value={taskDesc}
                        onChange={(e) => setTaskDesc(e.target.value)}
                    />
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateTask;
