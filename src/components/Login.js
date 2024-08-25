import React, { useState } from 'react'
import Axios from 'axios'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState([])

  const [result, setresult] = useState("")
  // const [HHOme , setHome] = useState("")


  const Login = (e) => {
    e.preventDefault();
    
    Axios.get("http://localhost:9000/login").then(
      result => { setUser(result.data) }
    )
    
    user.forEach((data) => {
      const UUname = data.username;
      const PPass = data.password;
      

      if (username === UUname ) {
        if(password === PPass){
          setresult("Login Succesfully")
          
          
        }
        else {
          setresult("Incorrect Details OR Register First")
        }
        
      }
    })
  }

  







  return (
    // <div className="container">
    //   <div>
    //     Login
    //   </div>
    //   <div>
    //     <h2>Username : </h2>
    //     <input className='input' name='email' type='text' onChange={(e) => setUsername(e.target.value)} />
    //   </div>
    //   <div>
    //     <h2>Password : </h2>
    //     <input className='input' name='email' type='text' onChange={(e) => setPassword(e.target.value)} />
    //   </div>
    //   <button onClick={Login}   type="submit">Log In </button>

    //   <h1>{result}</h1>
      
    // </div>
    <div className="form-container sign-in-container">
      <form>
        <h1>Sign In</h1>
        {/* <div className="social-container">
          <a href="#" className="social"><i class="fab fa-facebook"></i></a>
          <a href="#" classNsme="social"><i class="fab fa-linkedin"></i></a>
          <a href="#" className="social"><i class="fab fa-instagram"></i></a>
        </div> */}
        <span>Already have account ? </span>
        <input type="text" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={Login}   type="submit">Sign In</button>
        <h1>{result}</h1>
      </form>
    </div>
    
  )
}

export default Login