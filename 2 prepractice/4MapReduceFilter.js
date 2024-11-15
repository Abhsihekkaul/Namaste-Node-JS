const users = [
    { 
        name: 'John', 
        tasks: [
            { name: 'Task 1', status: 'completed', priority: 'high' },
            { name: 'Task 2', status: 'pending', priority: 'medium' },
            { name: 'Task 3', status: 'completed', priority: 'low' },
        ],
    },
    { 
        name: 'Jane', 
        tasks: [
            { name: 'Task 4', status: 'pending', priority: 'high' },
            { name: 'Task 5', status: 'completed', priority: 'medium' },
            { name: 'Task 6', status: 'completed', priority: 'low' },
        ],
    },
    { 
        name: 'Mike', 
        tasks: [
            { name: 'Task 7', status: 'completed', priority: 'high' },
            { name: 'Task 8', status: 'pending', priority: 'medium' },
        ],
    },
];
// Task 1: Use map to create an array of user names and the count of their completed tasks.
// Task 2: Use filter to find all users who have more than 2 tasks marked as completed.
// Task 3: Use reduce to count the total number of tasks across all users, grouped by status (completed, pending).

const N_CT = users.map((user) => {
    let total_completed_task = 0;
    for(let i = 0; i < user.tasks.length; i++){
        if(user.tasks[i].status == 'completed'){
            total_completed_task++;
        }
    }
    return [user.name , total_completed_task];
}) 

console.log(N_CT);

