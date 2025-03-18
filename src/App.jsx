import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './assets/components/NavBar'
import BookList from './assets/components/BookList'
import FavBook from './assets/components/FavBook'
import BookContextProvider from './assets/components/BookContextProvider'

function App() {

  return (
    <BookContextProvider>
      
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/favbook" element={<FavBook />} />
        </Routes>

      </BrowserRouter>

    </BookContextProvider>

  )
}

export default App
