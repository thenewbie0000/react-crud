import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const[id, setId] = useState(0);
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  },[]);

  const updateData = (e)=>{
    e.preventDefault();
    axios.put(`https://65d5dac6f6967ba8e3bcc395.mockapi.io/home/crud/${id}`,
    {
      name:name,
      email: email
    })
      .then(() =>{
        navigate('/read');
      })
  }

  return (
    <>
      <h2>Update Entry</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name}  
            onChange={(e) =>setName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control"  
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}  
          />
        </div>
        <button
         type="submit" 
         className="btn btn-primary mx-2"
         onClick={updateData}
        >Update</button>
        <Link to= '/read'>
          <button type="button" class="btn btn-secondary mx-2">Back</button> 
        </Link> 
      </form>
    </>
  )
}

export default Update
