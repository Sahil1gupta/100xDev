const mongoose=require('mongoose')


mongoose.connect ('mongodb+srv://Sahilgupta123:Sahilgupta766@cluster0.wft8uwg.mongodb.net/paytm')
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    }
})


const AccountSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    balance:{
        type:Number,
        required:true
    }
});


const User=mongoose.model('User',UserSchema);
const Account=new mongoose.Schema('Account',AccountSchema);
module.exports={User};
module.exports={Account};