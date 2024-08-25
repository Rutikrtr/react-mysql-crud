const express = require('express');
const mysql = require('mysql');
const cors =require('cors');

const app = express();
app.use(express.json())
app.use(cors())

app.listen(9000,()=>{
    console.log("Running On port Number 9000")
})


const connection = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        password:"",
        database:"firstapp"
    }
)


app.post("/register",(req,res)=>{
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;

    connection.query("INSERT INTO info(email,username,password) VALUES(?,?,?)",
    [email,username,password],(err,result)=>{
        if (result) {
            res.send(result)
        }
        else {
            res.send({ message: "Enter Correct asked Details" })
        }
    })
})



app.get("/login",(req,res)=>{
    connection.query("SELECT username,password FROM info",(err,result)=>{
        if(!err){
            res.send(result)
            console.log(result)
        }
        else{
            res.send({message:"data not fetch"})
        }
    })
})

app.get("/register/details",(req,res)=>{
    connection.query("SELECT * FROM info")
})