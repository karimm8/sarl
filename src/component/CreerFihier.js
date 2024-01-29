import React from 'react'
import {Link} from 'react-router-dom';
export default function CreerFihier() {
  return (
    <div className='wrapper' style={{width:"800px"}}>
       <form action=''>
             <h1>Creer Un Fichier</h1>
             <fieldset style={{padding:"10px"}}>
                  <legend>DEMANDE D'ACHAT</legend>
                  <div className='input-box'>
                        <input  type='text' placeholder='operation' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='situation' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='programme' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='lot' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='caution provisoir' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='montant estimatif' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='code operation' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='superficie' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='imputation' required />
                  </div>
             </fieldset>
             <fieldset style={{padding:"10px"}}>
              <legend>DOSSIER TECHNIQUE</legend>
              <div className='list'>
              <select  value="Qualification du minister de l'ahbitat">
                  <option>Qualification du minister de l'ahbitat</option>
                  <option>secteur</option>
                  <option>qualification</option>
                  <option>classe</option>
              </select>
              <select  value="Qualification du minister d'equipement">
                  <option>Qualification du minister d'equipement</option>
                  <option>secteur</option>
                  <option>qualification</option>
                  <option>classe</option>
              </select>
              </div>
             </fieldset>
             <fieldset style={{padding:"10px"}}>
              <legend>AGREMENT</legend>
              <div className='input-box'>
                        <input type='text' placeholder='agrement' required />
              </div>
             </fieldset>
             <fieldset style={{padding:"10px"}}>
              <legend>PIECE JOINT</legend>
                  <div className='input-box'>
                        <input type="file" placeholder='CPS' required />
                  </div> 
                  <div className='input-box'>
                        <input type='file' placeholder='RC(reglement)' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='DA' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='stimation' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='support info' required />
                  </div>
                  <div className='input-box'>
                        <input type='text' placeholder='montage' required />
                  </div>
             </fieldset>
             <fieldset style={{padding:"10px"}}>
              <legend>MODE DE PASSATION</legend>
                        <label>B.C.
                           <input type="checkbox"   />
                        </label>
                        <label>A.O.O.
                           <input type="checkbox"   />
                        </label>
                        <label>A.O.R.
                           <input type="checkbox"   />
                        </label>
                        <label>Marche Negocie
                           <input type="checkbox"   />
                        </label>
                        <label>Consultation
                           <input type="checkbox"   />
                        </label>
                        <label>Concours
                           <input type="checkbox"   />
                        </label>
             </fieldset>
             <fieldset style={{padding:"10px"}}>
              <legend>Observation</legend>
              <textarea rows={15} cols={40}></textarea>
             </fieldset>
             <button type='submit'>
                  Creer
             </button>
             <Link to='/ListFichier' className='link'>Afficher</Link>
                 <Link to='/'style={{color:"white",textAlign:'right',position:'fixed', bottom:"5%",right:"10%",backgroundColor:"violet",padding:"5px"}} >LogOut</Link>
           
          </form>
    </div>
  )
}
