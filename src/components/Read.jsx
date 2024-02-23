import './read.css'
import axios from 'axios'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  
  const getData = ()=>{
    axios.get('https://65d5dac6f6967ba8e3bcc395.mockapi.io/home/crud')
    .then((res) =>{
      setData(res.data)
    })
  }

  const setToLocalStorage = (id, name, email) =>{
    localStorage.setItem("id", id),
    localStorage.setItem("name", name),
    localStorage.setItem("email", email)
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteData = (id)=>{
    axios.delete(`https://65d5dac6f6967ba8e3bcc395.mockapi.io/home/crud/${id}`)
      .then(()=>{getData();})

  }

  return (
    <>
      <section className='header'>
        <h2>Read Operation</h2>
        <Link to ='/create'>
          <button type="button" class="btn btn-dark">Create</button>
        </Link>
      </section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        { data.map((eachData)=>{
          return(
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td><Link to='/update'>
                    <button 
                      type="button" 
                      className="btn btn-success" 
                      onClick={()=>{
                        setToLocalStorage(eachData.id, eachData.name, eachData.email)
                      }}>
                        Edit
                    </button>
                  </Link></td>
                  <td><button type="button" className="btn btn-danger" onClick={()=>deleteData(eachData.id)}>Delete</button></td>
                </tr>
              </tbody>
            </>
          )
        })}
      </table>
    </>
  )
}

export default Read


