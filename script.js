let tasks = [];

function addTask()
{
    let input = document.getElementById("taskInput");

    if(input.value == "")
    {
        return;
    }

    tasks.push(input.value);

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