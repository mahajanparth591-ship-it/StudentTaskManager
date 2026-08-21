let tasks = [];

function addTask()
{
    let input = document.getElementById("taskInput");
    let priority = document.getElementById("priority");
    let dueDate = document.getElementById("dueDate");

    if(input.value == "")
    {
        return;
    }

    let task = input.value + " - " + priority.value + " - " + dueDate.value;

    tasks.push(task);

    input.value = "";

    displayTasks();
}

function displayTasks()
{
    let list = document.getElementById("taskList");

    list.innerHTML = "";

    for(let i = 0; i < tasks.length; i++)
    {
        let li = document.createElement("li");

        li.innerHTML = tasks[i] + 
                       " <button onclick='deleteTask(" + i + ")'>Delete</button>";

        list.appendChild(li);
    }

    document.getElementById("total").innerText = tasks.length;
}

function deleteTask(index)
{
    tasks.splice(index, 1);

    displayTasks();
}