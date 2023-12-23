const express=require('express');
const app=express()

// middleware for calculate number of requests
let numberOfrequests=0;

function numberOfreq(req,res,next){
    numberOfrequests++;
    console.log(numberOfrequests)
    next()
}


app.get('/health-checkup',numberOfreq,function(req,res){
    const username=req.headers.username;
    const password=req.headers.password;
    const kidenyId=req.query.kidenyid;


    if( !(username==="sahil" && password==="pass")){   //if username and pswd does not match
            res.status(400).json({msg:"somehting went up with your login details"})
            return
    }

    if(kidenyId!=1 && kidenyId!=2){
        //do something with kideny here
        res.status(400).json({
            msg:"Your kidney is not fine"
        })
        return
    }

    res.json({
        msg:"Your kidney is fine"
    })
})


//middleware concept ,Global catch as middleware to handle exception 

app.use(express.json());
const zod=require('zod');

//now declaring schema for input field
const schema=zod.array(zod.number());

app.post('/health-checkup',function(req,res){
    //user expected to give input in form of array bcoz below we ahve used length method of array
    const kidneys=req.body.kidenys;
    const response=schema.safeParse(kidneys)
    const kidenyLength=kidneys.length;

    res.json({"your response":response, 
    "your kidney length is":kidenyLength
})
})


//global catches
app.use(function(err,req,res,next){
    res.json({
        msg:"something is went up with our server"
    })
})
app.listen(3000);