import React from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from '../views/login/Login'
import NewsSandBox from '../views/sandbox/NewsSandBox'

export default function IndexRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/*" element={ localStorage.getItem("token")?  <NewsSandBox></NewsSandBox> : <Navigate to="/login" replace />}  ></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
        </HashRouter>
    )
}


