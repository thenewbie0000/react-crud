import React from 'react'
import Create from './components/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/Read'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/create' element = {<Create />}>
          </Route>
          <Route exact path='/read' element = {<Read />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
