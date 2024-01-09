import React ,{useEffect,useState}from 'react'
import axios from 'axios'
import {Link,useParams} from 'react-router-dom'
import './Home.css'
import img_2 from '../assests/images/iiitb.jpeg'
import Navbar from '../layout/Navbar'


export default function Home() {
    const [users,setUsers]=useState([])
    const { id } = useParams();
    useEffect ( () => {
        loadUsers();
       
       

    },[]);
    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:8080/users")
        setUsers(result.data);
      };

      const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
      };
  return (
   
<>
<Navbar/>
<div className="container">
         
        
         <div className='py-4'>
         <table className="table border pink  shadow">
   <thead>
     <tr>
       <th scope="col">#</th>
       <th scope="col">NAME</th>
       <th scope="col">USERNAME</th>
       <th scope="col">PHOTOGRAPH_PATH</th>
       <th scope="col">EMAIL</th>
       <th scope="col">CGPA</th>
       <th scope="col">ROLL NUMBER</th>
       <th scope="col">ACTIONS</th>
     </tr>
   </thead>
   <tbody>
     {
         users.map((user,index)=>
         ( <tr>
             <th scope="row" key={index}>{index+1}</th>
             <td>{user.name}</td>
             <td>{user.username}</td>
             <td>{user.photograph_path}</td>
             <td>{user.email}</td>
             <td>{user.cgpa}</td>
             <td>{user.branch}</td>
             <td>
             <Link className="btn btn-primary mx-2"
             to={`/viewuser/${user.id}`}
             
             >VIEW
             
             
             </Link>
             <Link className="btn btn-outline-primary mx-2"
             to={`/edituser/${user.id}`}
             
             >EDIT</Link>
             <button className="btn btn-danger mx-2"
             onClick={() => deleteUser(user.id)}
             >DELETE</button>
             </td>
           </tr>
 
         ))
     }
 
   </tbody>
 </table>
         </div>
       
     </div>

</>

   
  )
}
