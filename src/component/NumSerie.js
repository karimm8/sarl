import React from 'react'
import {Link} from 'react-router-dom';
export default function NumSerie() {
  return (
    <div className='wrapper' style={{width:"800px"}}>
    <form action=''>
          <h1>Ajouter NumSerie</h1>
          <fieldset style={{padding:"10px"}}>
               <legend>NumSerie</legend>
               <div className='input-box'>
                     <input  type='text' placeholder='ajouter un serie' required />
               </div>
          </fieldset>
          <button type='submit'>
               Ajouter
          </button>
              <Link to='/'style={{color:"white",textAlign:'right',position:'fixed', bottom:"5%",right:"10%",backgroundColor:"violet",padding:"5px"}} >LogOut</Link>
        
       </form>
 </div>
)}
