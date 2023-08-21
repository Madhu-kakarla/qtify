import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home/Home";
import Album from "./components/Album/Album"
import NotFound from './components/NotFound/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album/:slug' element={<Album />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App