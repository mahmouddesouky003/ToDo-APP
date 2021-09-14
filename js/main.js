let body = document.querySelector('body');
let input = document.getElementById('taskdata');
let addbtn = document.getElementById('addbtn');
let notask = document.getElementById('notask');
let tasks = document.getElementById('tasks');
let model = document.getElementById('model');
let show = document.getElementById('show');
let closee = document.getElementById('close');
let switchBtn = document.getElementById('switchBtn');

console.log(switchBtn);

switchBtn.onclick = function () {
    if (body.classList[0] == 'bg-dark') {
        body.classList.remove('bg-dark')
        this.classList.add('btn-dark')
        this.classList.remove('btn-light')
        this.innerText = "Dark mode"
    } else {
        body.classList.add('bg-dark')
        this.classList.add('btn-light')
        this.classList.remove('btn-dark')
        this.innerText = "light mode"
    }
}

let showMoel = () => {
    model.classList.toggle('display');
}
show.addEventListener('click', showMoel);
closee.addEventListener('click', showMoel)

let noTasksFunction = () => {
    if (tasks.childElementCount == 0) {
        notask.classList.remove('none');
    }
}
let addTask = () => {
    let task = input.value;
    if (task.trim() == 0 || task.length < 2 || task.length > 20) {
        alert("you Must enter Valid Data")
    } else {
        notask.classList.add('none');
        tasks.innerHTML += `<div class='task alert alert-info'> ${task}
        <i class="fas delete fa-trash-alt float-right" style="font-size: 20px;"></i>
        </div>`;
        showMoel();
    }
    tasks.addEventListener('click', function (ts) {
        if (ts.target.classList.contains('task')) {
            ts.target.classList.toggle('checked');
        }
    })
    input.value = "";
}
addbtn.addEventListener('click', addTask);


document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
        noTasksFunction();
    }
})