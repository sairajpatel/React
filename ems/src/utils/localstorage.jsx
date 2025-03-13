const employees=[
    {
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Complete Monthly Report",
                "task_description": "Prepare and submit the financial report for this month.",
                "task_date": "2024-03-11",
                "category": "Finance",
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false
            },
            {
                "task_title": "Attend Team Meeting",
                "task_description": "Join the weekly status update meeting.",
                "task_date": "2024-03-12",
                "category": "Meetings",
                "active": false,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Client Presentation",
                "task_description": "Prepare and deliver presentation for new clients.",
                "task_date": "2024-03-14",
                "category": "Sales",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Code Review",
                "task_description": "Review the latest PR from the development team.",
                "task_date": "2024-03-10",
                "category": "Development",
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Inventory Check",
                "task_description": "Perform monthly inventory audit.",
                "task_date": "2024-03-15",
                "category": "Operations",
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "task_title": "Social Media Update",
                "task_description": "Post the latest company updates on social media.",
                "task_date": "2024-03-13",
                "category": "Marketing",
                "active": false,
                "new_task": false,
                "completed": false,
                "failed": true
            }
        ]
    }
]
const admin=[
    {
        "email": "admin@example.com",
        "password": "123"
    }
]
export const setLocalStoarge=()=>{
   localStorage.setItem('employees',JSON.stringify(employees));
   localStorage.setItem('admin',JSON.stringify(admin));
}
export const getLocalStoarge=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))
return {employees,admin}

}