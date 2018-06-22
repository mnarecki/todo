class ToDo {
    constructor(selector){
        this.toDoListContainer = document.querySelector(selector)
        this.tasks = [{
                taskName: 'smieci',
                isCompleted : true
            }]
        this.newTaskName = ''
        this.render()    
    }

    render(){
        this.toDoListContainer.innerHTML = ''
        this.buildUI()
        this.renderTaskList()
    }

    renderTaskList(){
        // this is a comment
        for(let i = 0; i < this.tasks.length; i++){
            const taskContainer = document.createElement('div')
            taskContainer.innerHTML = this.tasks[i].taskName
            if(this.tasks[i].isCompleted) taskContainer.style.textDecoration = 'line-through'
            taskContainer.addEventListener(
                'click',
                () => this.onTaskClickHandler(i)
            )

            this.toDoListContainer.appendChild(taskContainer)
        }
    }

    buildUI(){
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerHTML = 'Dodaj zadanie'
        input.addEventListener(
            'input',
            () => this.onNewTaskNameChanged()
        )
        button.addEventListener(
            'click',
            () => this.onAddNewTaskClickHandler()
        )
        this.toDoListContainer.appendChild(input)
        this.toDoListContainer.appendChild(button)
    }

    onTaskClickHandler(index){
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted
        this.render()
    }

    onAddNewTaskClickHandler(){
        this.addTask(this.newTaskName)
        this.newTaskName = ''
        this.render()
    }

    onNewTaskNameChanged(){
        this.newTaskName = event.target.value
    }

    addTask(taskName){
        this.tasks = this.tasks.concat({
            isCompleted: false,
            taskName: taskName
        })

        this.render()
    }
}

const toDo1 = new ToDo("div.toDo1")