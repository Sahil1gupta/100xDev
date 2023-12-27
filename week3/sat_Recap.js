const express=require("express")
const app=express();


function isValidAge(age){
    if(age>14){
        return true;
    }
    else{
        return false;
    }
}

function isValidOldAge(req,res,next){
    let age=req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            "msg":"you are not eligible"
        })
    }
}

app.use(isValidOldAge)

app.get('/ride2',(req,res)=>{

 
    res.json({
        msg:"You are successfully accessed ride 2"
    })

    
})
app.get('/ride1',(req,res)=>{

 
        res.json({
            msg:"You are successfully accessed ride 1"
        })
   
        
})

app.listen(3000)