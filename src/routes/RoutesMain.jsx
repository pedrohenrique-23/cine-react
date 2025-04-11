import React from 'react'
import { Route, Routes } from 'react-router-dom'

const RoutesMain = () => {
  return (
    <Routes>
        <Route path='' element={<HomePage/>}/>
    </Routes>
  )
}

export default RoutesMain