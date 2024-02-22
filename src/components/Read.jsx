import axios from 'axios'
import React, { useState, useEffect} from 'react'

const Read = () => {
  const [data, setData] = useState([]);
  
  const getData = ()=>{
    axios.get('https://65d5dac6f6967ba8e3bcc395.mockapi.io/home/crud')
    .then((res) =>{
      console.log(res.data)
      setData(res.data)
    })
  }

  useEffect(() => {
    getData();
  }, [data]);

  return (
    <>
      <h2>Read Operation</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><button type="button" class="btn btn-success">Success</button></td>
            <td><button type="button" class="btn btn-danger">Danger</button></td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Read
