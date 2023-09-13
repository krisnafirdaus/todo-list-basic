let tasks = [];

function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskValue = taskInput.value.trim();

    if(taskValue) {
        tasks.push(taskValue);
        renderTasks();
        taskInput.value = '';
    }
}

function renderTasks() {
    const list = document.getElementById('todoList');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        list.innerHTML += `
            <li>
                ${task}
                <input type="text" id="edit-${index}" value="${task}" style="display: none;">
                <div id="wrapper-btn">
                    <button onclick="editTask(${index})" id="edit">Edit</button>
                    <button onclick="saveTask(${index})" class="save" id="save-${index}" style="display: none;">Save</button>
                    <button onclick="removeTask(${index})" id="delete">Hapus</button>
                </div>
            </li>`;
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function editTask(index) {
    document.getElementById(`edit-${index}`).style.display = 'inline-block';
    document.getElementById(`save-${index}`).style.display = 'inline-block';
}

function saveTask(index) {
    const editedTask = document.getElementById(`edit-${index}`).value.trim();

    if(editedTask) {
        tasks[index] = editedTask;
        renderTasks();
    } else {
        alert('Task tidak boleh kosong!');
    }
}


renderTasks();
