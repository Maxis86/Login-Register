import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ExtrasPage } from '../pages/ExtrasPage'

export const ExtrasRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<ExtrasPage/>}/>
        <Route path="/*" element={<Navigate to="/"/>}/>


    </Routes>
  )
}
