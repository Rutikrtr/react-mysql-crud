import Login from './components/Login';
import Register from './components/Register';
// import { useState,useEffect } from 'react';
import './App.css';
// import { BrowserRouter as Router, Switch, 
//   Route, Redirect,} from "react-router-dom";

function App() {

//   const signUpButton = document.getElementById("signUp");
// const signInButton = document.getElementById("signIn");
// const container = document.getElementById("container");

// signUpButton.addEventListener("click", () => {
//   container.classList.add("right-panel-active");
// });

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });


  return (
    <div className='constiner'>
      <Register />
      <Login />
      
    

    </div>


  );
}

export default App;
