import { useState } from 'react'

import './App.css'
import { CreateTodo } from '../component/CreateTodo'
import { Todos } from '../component/Todos'

function App() {
  
  const [todos,setTodos]=useState([])
  //! this is not the optimal way to call an api it will rerender's the component infinite time
  fetch("http://localhost:3000/todos")
  .then(async function (res){
    const json=await res.json();
    setTodos(json.todos)
  })
  return (
   <div>
    <CreateTodo/>
    {/* <Todos todos={[{
      title:"sdsd",
      description:"ded",
      completed:true
    }]}/> */}

    <Todos todos={todos}/>
   </div>
  )
}

export default App
