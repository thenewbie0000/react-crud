import React from 'react'
import './create.css'

const Create = () => {
  return (
    <>
      <h2>Create New Entry</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control"  aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default Create
