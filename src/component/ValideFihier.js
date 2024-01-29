import React from 'react';
import { GrValidate } from "react-icons/gr";
import {Link} from 'react-router-dom';
export default function ValideFihier() {
  return (
    <div className='wrapper' style={{width:"100%"}}>
              <table id='customers'>
        <caption style={{fontSize:"32px",fontWeight:"bold",marginBottom:"30px"}}>Validate du Fichier</caption>
        <tr>
            <th>operation</th>
            <th>situation</th>
            <th>programme</th>
            <th>lot</th>
            <th>caution provisoir</th>
            <th>montant estimatif</th>
            <th>code operation</th>
            <th>superficie</th>
            <th>imputation</th>
            <th>validate</th>
        </tr>
        <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
            <td>
               <GrValidate style={{cursor:"pointer"}} />
            </td>
        </tr>
    </table>
    <Link to='/'style={{color:"white",textAlign:'right',position:'fixed', bottom:"5%",right:"10%",backgroundColor:"violet",padding:"5px"}} >LogOut</Link>
    </div>
  )
}
