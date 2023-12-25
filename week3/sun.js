const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json())
const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
 const IsUserExist=ALL_USERS.find((user)=>
        (user.username==username && user.password==password)
        )

        return !!IsUserExist //? (!IsUserExist) -->this will convert the result of find method into boolean find method always return first occurrence of data 
        // if !IsUserExist converts into boolean let suppose find method found somethng and returns it  but !IsUserExist this conversion will give false to remove this effect and to get acutal output bcoz we know user is exist that's why find method gave us output but !IsUserExist this expression made it false to get actuall output we will use one more negation !!IsUserExist

        // or using filter method

       /* function userExists(username, password) {
            const filteredUsers = ALL_USERS.filter((user) => {
              return user.username === username && user.password === password;
            });
          
            return filteredUsers.length > 0; //? filteredUsers this will have array and if calculate length if user exist in this array we will get some length if not length would be zero  Return true if any user matches, false if none
          } */
        // ! chatgpt ref: https://chat.openai.com/share/fee35bd5-f4ec-4ac1-94c4-d681eeb87814


    }

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username

    res.json({
        users:ALL_USERS.filter((value)=>{
            if(value.username==username){
                return false;    //vo user ko chhod ke baki sbko show krvana hai
            }
            else{
                return true;
            }
        })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)