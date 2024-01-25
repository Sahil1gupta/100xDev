const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const cors=require("cors");
const app=express()

app.use(express.json())
app.use(cors())
// or
// app.use(cors({
//     origin:"http://localhost:3000/todos"  //we can only allow this url to hit the backend
// }))
//what inputs we are expecting form the user
// body{
//     title:string,
//     dexcription:string
// }

app.post('/todo',async (req,res)=>{
    const createPayload=req.body;
    console.log(createPayload)
    const parsePayload=createTodo.safeParse(createPayload);
    console.log(parsePayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
    }
    //put it in mongodb
    try{
        await todo.create({
            title:createPayload.title,
            description:createPayload.description,
            completed:false
        })

        res.json({
            msg:"Todo has created"
        })
    }
    catch(err){
        res.status(411).json({       
                error:err      
        })
    }
   
})

app.get('/todos',async (req,res)=>{
   const todos=await todo.find({});
   console.log(todos)
   res.json({
    todos
   })
})

app.put('/completed',async(req,res)=>{
    const updatePayload=req.body
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"can not update"
        })
    }

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo marked as completed"
    })
})

app.listen(3000)
