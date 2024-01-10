const jwt=require("jsonwebtoken")

const values={
    username:"Sahil",
    email:"sag88@gmail.com"
}

//to generate jwt token
const token=jwt.sign(values,"secret")
console.log(token)

//decode
const decoded=jwt.decode(token,"secret")
console.log(decoded)