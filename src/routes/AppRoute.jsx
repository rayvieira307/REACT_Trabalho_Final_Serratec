import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Cadastrar from '../pages/Cadastrar'
import Home from '../pages/Home'
import Perfil from '../pages/Perfil'
import Post from '../pages/Post'
import Error from '../pages/Error'



export default function AppRoute() {
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/cadastrar' element={<Cadastrar/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/perfil' element={<Perfil/>}></Route>
        <Route path='/post' element={<Post/>}></Route>
        <Route path='/*' element={<Error/>}></Route>
    </Routes>
  )
}
