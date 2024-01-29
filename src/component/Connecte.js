import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './connect.css';
import {FaUser,FaLock} from "react-icons/fa";
export default function Connecte() {
    const navigate = useNavigate();
    const [user,setuser] = useState("");
    const [password,setpassword] = useState("");
    const verifierLogin = (e) => {
               e.preventDefault();
                 if(user !== "" || password !== ""){
                    if(user === "chef" || password === "123456"){
                         navigate("/creerFichier");
                    }
                    if(user === "dm" || password === "111222"){
                         navigate("/valideFichier")
                    }
                    if(user === "dti" || password === "222111"){
                         navigate("/numSerie")
                    }  
                    if(user !== "chef" || user !== "dm" || user !== "dti" || password !== "111222" || password !== "222111" || password !== "123456"){
                         navigate("/error")
                    }
                 }
                    else {
                         alert("incorrect");
                    }
    }
  return (
    <div className='wrapper'>
          <form action='' onSubmit={verifierLogin}>
             <h1>Login</h1>
             <div className='input-box'>
                  <input value={user} onChange={e=>setuser(e.target.value)} type='text' placeholder='username' required />
                  <FaUser className='icon' />
             </div>
             <div className='input-box'>
                  <input value={password} onChange={e=>setpassword(e.target.value)} type='password' placeholder='password' required />
                  <FaLock className='icon' />
             </div>
             <div className='forget'>
                  <label><input type='checkbox'/>Remember me</label>
                  <a href='#'>Forgot password?</a>
             </div>
             <button type='submit'>
                 Login
             </button>
          </form>
    </div>
  )
}
