import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App.jsx'
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Home2 from './pages/Home/index'
import Signup from './pages/Signup/index'
import Signin from './pages/Signin/index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<Movie/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path='/home' element={<Home2/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
