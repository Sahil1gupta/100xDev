import { useState } from "react"

export function CreateTodo(){
    const [title,setTitle]=useState(" ");
    const [description,setDescription]=useState(" ")
    return <>
    <input style={{padding:10,margin:10}} type="text" placeholder="title"
    onChange={function(event){
        setTitle(event.target.value)
    }}
    ></input><br/>
    <input style={{padding:10,margin:10}}  type="text" placeholder="description"
    onChange={function(event){
        setDescription(event.target.value)
    }}
    ></input><br/>

    <button style={{padding:10,margin:10}} onClick={()=>{
        fetch("http://localhost:3000/todos",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                "contentType":"application/json"
            }
        })
    }}>Add todo</button>
    </>
}