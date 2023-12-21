const express=require('express');
const app=express()


app.use(express.json())
var users =[{
    id:1,
    name:"sahol",
    kidenys:[{
        healthy:false
    },{
        healthy:true
    }]
},
// {
//     id:2,
//     name:"sahol",
//     kidenys:[{
//         healthy:false
//     },{
//         healthy:true
//     }]
// },
// {
//     id:3,
//     name:"sahol",
//     kidenys:[{
//         healthy:false
//     },{
//         healthy:true
//     }]
// },
// {
//     id:4,
//     name:"sahol",
//     kidenys:[{
//         healthy:false
//     },{
//         healthy:true
//     }]
// }

]
// let ans=users.find((user)=>(user.id==1))
// console.log(ans)
// console.log("first")
app.get("/",function(req,res){
    const johnKidneys=users[0].kidenys;
    const numberOfkidneys=johnKidneys.length;
    let numberOfHealthKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){

            numberOfHealthKidneys=numberOfHealthKidneys+1;
        }
    }

    const numberOfUnhealthyKidneys=numberOfkidneys-numberOfHealthKidneys;
    res.json({
        numberOfkidneys,
        numberOfHealthKidneys,
        numberOfUnhealthyKidneys
    })


})

// for GET use query and for POST use body
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidenys.push({healthy:isHealthy});

    res.json({
        msg:"Done"
    })

})

//PUT
app.use('/',function(req,res){
    for(let i=0;i<users[0].kidenys.length;i++){
        users[0].kidenys[i].healthy=true;
    }
    res.json({users})
})

// DELETE
// app.delete('/', function (req, res) {
//     users.forEach((ele) => {
//       for (let i = ele.kidenys.length - 1; i >= 0; i--) {
//         if (ele.kidenys[i].healthy === false) {
//           ele.kidenys.splice(i, 1);
//         }
//       }
//     });
//     res.send(users);
//   });

app.delete('/', function (req, res) {
    users.forEach((ele) => {
      ele.kidenys = ele.kidenys.filter(kidney => kidney.healthy === true);
    });
    res.send(users);
  });
app.listen(3000)
