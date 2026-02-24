import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Discover from './components/Discover'
import Favourites from './components/Favourites'
import Search from './components/Search'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Discover />} />
          <Route path='/search' element={<Search />} />
          <Route path='/favourites' element={<Favourites />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
