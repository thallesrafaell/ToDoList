
function addElement() {
    //titulo da tarefa
    const inputtask = document.querySelector('#add-task-name').value
    //clone template
    const task = document.querySelector('#task-name')
    const newtask = task.cloneNode(true)
    // add title    
    newtask.querySelector('#ptask').textContent = inputtask
    //remove class/add  
    newtask.classList.remove('task-name')
    newtask.classList.add("screen")
    //declarando local
    const ul = document.querySelector('#ul')
    ul.appendChild(newtask)
    //remover tarefa
    newtask.querySelector('#btn-delete').addEventListener('click', () => { newtask.remove(this)})
    //limpado input
    document.querySelector('#add-task-name').value = ''
    newtask.querySelector('#btn-complete').addEventListener('click', () => { newtask.classList.toggle('done')})

}

function removeTask(task){
    task.parentNode.remove(true)
}
//Evento Formulario
const btnform = document.querySelector('#form1')
btnform.addEventListener('submit', (e) => {
    e.preventDefault()
    addElement()
    
})

