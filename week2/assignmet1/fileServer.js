const express=require("express")
const app =express()

const fs=require('fs')



app.get('/files',function(req,res){
    fs.readdir('./files',function(err,files){
        if(err){
            res.json({'err':err})
        }
        else{
            res.json({'files':[files]})
        }
    })
})
//search by anyname

app.get('/files/:filename',function(req,res){
    const filename=req.params.filename
    fs.readFile(`./files/${filename}.txt`,"utf-8",(err,data)=>{
        if(err){
            console.log(err)
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
})

app.listen(3000)
