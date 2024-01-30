import './connect.css'
import React from 'react';
import { MdDelete } from "react-icons/md";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';
export default function ListFihier() {
  return (
    <div className='wrapper' style={{width:"100%",overflowX:"auto"}}>
        <table id='customers'>
        <caption style={{fontSize:"32px",fontWeight:"bold",marginBottom:"30px"}}>List du Fichier</caption>
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
            <th>Action</th>
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
                <MdDelete style={{cursor:"pointer"}} />
                <HiMiniPencilSquare style={{cursor:"pointer",margin:"0px 5px"}} />
                <FaSearch style={{cursor:"pointer"}} />
            </td>
        </tr>
    </table>
    <Link to='/'style={{color:"white",textAlign:'right',position:'fixed', bottom:"5%",right:"10%",backgroundColor:"violet",padding:"5px"}} >LogOut</Link>
    </div>
  )
}
