import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Cart from '../components/Cart.jsx'
import Products from '../components/Products.jsx'

function Home() {
  return (
    <div className='bg-background h-screen flex flex-col'>
      <Navbar />
      <main
        className="grid flex-grow p-4 gap-4 h-full"
        style={{
          gridTemplateColumns: 'max-content auto auto',
          gridTemplateRows: 'auto max-content auto',
          gridTemplateAreas: `
            "sidebar search-bar cart"
            "sidebar product-grid cart"
            "sidebar product-grid cart"
          `
        }}
      >
        <Sidebar />
        <SearchBar />
        <Cart />
        <Products />
      </main>
    </div>
  )
}

export default Home
