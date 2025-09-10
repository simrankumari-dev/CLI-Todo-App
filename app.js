import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const showMenu = () => {
    console.log("\n1: Add a Task");
    console.log("2: View Tasks");
    console.log("3: Exit");
    console.log("4: Complete a Task");
    console.log("5: Delete a Task"); // ✅ New Option

    rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
    if (option === "1") {
        rl.question("Enter the Task: ", (task) => {
            todos.push({ task: task, completed: false }); 
            console.log("Task Added:", task);
            showMenu();
        });
    } 
    else if (option === "2") {
        console.log("\nYour Todo List:");
        if (todos.length === 0) {
            console.log("No tasks added yet.");
        } else {
            todos.forEach((todo, index) => {
                const status = todo.completed ? "[✔]" : "[ ]";
                console.log(`${index + 1}. ${status} ${todo.task}`);
            });
        }
        showMenu();
    } 
    else if (option === "3") {
        console.log("Good Bye!");
        rl.close();
    } 
    else if (option === "4") {
        if (todos.length === 0) {
            console.log("No tasks to complete!");
            showMenu();
        } else {
            console.log("\nWhich task do you want to complete?");
            todos.forEach((todo, index) => {
                const status = todo.completed ? "[✔]" : "[ ]";
                console.log(`${index + 1}. ${status} ${todo.task}`);
            });
            rl.question("Enter task number: ", (num) => {
                const index = parseInt(num) - 1;
                if (index >= 0 && index < todos.length) {
                    todos[index].completed = true; 
                    console.log(`Task Completed: ${todos[index].task}`);
                } else {
                    console.log("Invalid task number!");
                }
                showMenu();
            });
        }
    }
    else if (option === "5") {
        if (todos.length === 0) {
            console.log("No tasks to delete!");
            showMenu();
        } else {
            console.log("\nWhich task do you want to delete?");
            todos.forEach((todo, index) => {
                const status = todo.completed ? "[✔]" : "[ ]";
                console.log(`${index + 1}. ${status} ${todo.task}`);
            });
            rl.question("Enter task number: ", (num) => {
                const index = parseInt(num) - 1;
                if (index >= 0 && index < todos.length) {
                    const removed = todos.splice(index, 1); // ✅ delete task
                    console.log(`Task Deleted: ${removed[0].task}`);
                } else {
                    console.log("Invalid task number!");
                }
                showMenu();
            });
        }
    }
    else {
        console.log("Invalid Option. Please try again.");
        showMenu();
    }
};

showMenu();


