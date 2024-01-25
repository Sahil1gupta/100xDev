const zod=require('zod')
/*
schema for post todo
{
    title:string,
    descrition:string
}


schema for put completed
{
    id:string
}
*/

let createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})

const updateTodo=zod.object({
    id:zod.string()
})

module.exports={
    createTodo:createTodo,
    updateTodo:updateTodo
}