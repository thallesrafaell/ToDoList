let taskrec = []

function addElement() {
    //titulo da tarefa
    const inputtask = document.querySelector('#add-task-name').value
    
    if(taskrec.includes(inputtask)){
        alert("[ERRO]Esta tarefa ja foi addicionada")
    } else {
        
        
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
        taskrec.push(inputtask)
    }
}
//Evento Formulario
const btnform = document.querySelector('#form1')
btnform.addEventListener('submit', (e) => {
    e.preventDefault()
    addElement()
    
})
