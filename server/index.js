const express = require('express');
const mysql = require('mysql');
const cors =require('cors');

const app = express();
app.use(express.json())
app.use(cors())

app.listen(9002,()=>{
    console.log("Running On port Number 9002")
})


const connection = mysql.createConnection(
    {
        user:"root",
        host:"localhost",
        password:"",
        database:"nameData"
    }
)


app.post("/register",(req,res)=>{
    const name = req.body.name;
   
    connection.query("INSERT INTO info(name) VALUES(?)",
    [name],(err,result)=>{
        if (result) {
            res.send(result)
        }
        else {
            res.send({ message: "Enter Correct asked Details" })
        }
    })
})

