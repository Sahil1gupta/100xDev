/*
todos=[
    {
        title,
        descritption
        completed
    },{
         title,
        descritption
        completed
    }
]
*/

export function Todos({todos}){
    return (
        <div>
            {
                todos.map(function(todo){
                    return <div>
                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button>{todo.completed?"completed":"mark as completed"}</button>
                    </div>
                })
            }
        </div>
    )
}