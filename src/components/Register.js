import React, { useState } from 'react'
import Axios from 'axios'
const Register = () => {

    const[email,setEmail]=useState("")
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    const[status,setStatus]=useState("")

    const register = (e)=>{
        e.preventDefault();
        Axios.post("http://localhost:9000/register",{
            email:email,
            username:username,
            password:password
        }).then(response => {
            if(response.data.message){
                setStatus(response.data.message)
              }
              else{
                setStatus("details send succesfully")
              }
        })
    }

  return (

    <div className="form-container sign-up-container">
      <form>
        <h1>Create Account</h1>
        <span>Create an account for free </span>
        <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={register}>Sign Up</button>
        <h3>{status} </h3>
      </form>
    </div>
  )
}

export default Register