import React from 'react'
import  { useState } from "react";
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import img_1 from '../assests/images/student.png'
import './AddUser.css'

export default function AddUser() {
    let navigate=useNavigate()
  
  const [user, setUser]=useState ({
    name:"",
    username:"",
    photograph_path:"",
    email:"",
    cgpa:"",
    branch:""

  })
  const {name,username,photograph_path,email,cgpa,branch}=user
  const onInputChange=(e)=>
  {
   setUser({...user,[e.target.name]:e.target.value});

  };
  const onSubmit=async(e)=>
  {
  e.preventDefault();
  await axios.post("http://localhost:8080/user",user)
  navigate("/home")
  };
  return(
   <div className="container">
     <img src={img_1} class="img-fluid" alt="..." />
    <div className="row">
        <div className="col-md-6 offset-md-3 border pink rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Register User</h2>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="mb-3">
            <label htmlFor="Name" className="form-label">
                Name
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}/>

        </div>
        <div className="mb-3">
            <label htmlFor="Username" className="form-label">
                Username
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder="Enter your username"
            name="username"
            value={username}
            onChange={(e)=>onInputChange(e)}/>
            

        </div>
        <div className="mb-3">
            <label htmlFor="photograph_path" className="form-label">
                photograph_path
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder="Enter your photograph_url"
            name="photograph_path"
            value={photograph_path}
            onChange={(e)=>onInputChange(e)}/>

        </div>
        <div className="mb-3">
            <label htmlFor="Branch" className="form-label">
                Email
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}/>

        </div>
        <div className="mb-3">
            <label htmlFor="Cgpa" className="form-label">
                CGPA
            </label>
            <input 
            type={"text"}
            className="form-control"
            placeholder="Enter your cgpa"
            name="cgpa"
            value={cgpa}
            onChange={(e)=>onInputChange(e)}/>

        </div>
        <div className="mb-3">
                            <label htmlFor="Branch" className="form-label">
                                Branch
                            </label>
                            <select
                                className="form-select"
                                name="branch"
                                value={branch}
                                onChange={(e) => onInputChange(e)}
                            >
                                <option value="">Select Branch</option>
                                <option value="MTech2023_">MTech</option>
                                <option value="IMTech2023_">IMTech</option>
                                <option value="MS2023_">MS</option>
                            </select>
                        </div>
        
        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link  className="btn btn-outline-danger mx-2 "  to="/">Cancel</Link></form>
        </div>


    </div>
    </div>
  )
  
}

                           