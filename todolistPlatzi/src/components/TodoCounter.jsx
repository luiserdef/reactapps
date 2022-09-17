

export const TodoCounter=(props)=>{

const totalOfTodos=props.todoData.length
const completedTodo = props.todoData.filter((task=>task.isCompleted))
const totalOfCompleted = completedTodo.length

    return(
        <h1>Has completado {totalOfCompleted} de {totalOfTodos} todos</h1>
    )
}