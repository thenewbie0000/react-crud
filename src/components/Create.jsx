import React, { useState } from 'react'
import './create.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const header = {"Access-Control-Allow-Origin" : "*"};
  const history = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('https://65d5dac6f6967ba8e3bcc395.mockapi.io/home/crud',{
      name:name,
      email:email, 
      headers: header,
    });
    history('/read');
  }

  return (
    <>
      <h2>Create New Entry</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control"   
            onChange={(e) =>setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control"  
            aria-describedby="emailHelp"
            onChange={(e) =>setEmail(e.target.value)}  
          />
        </div>
        <button
         type="submit" 
         className="btn btn-primary"
         onClick={handleSubmit}        
        >Submit</button>
      </form>
    </>
  )
}

export default Create
