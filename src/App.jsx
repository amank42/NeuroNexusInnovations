import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Search from './components/SearchDiv/Search'
import Jobs from './components/JobDiv/Jobs'
import Footer from './components/FooterDiv/Footer'
import Value from './components/ValueDiv/Value'

const App = () => {
  return (
    <div className='w-[100%] m-auto'>
      <div className='bg-[#fcdac4]'>
      <NavBar />
      </div>
      
      <div className='m-auto'>
      <Search />
      </div>

      <div className='m-auto'>
        <Jobs />
      </div>
      
      <div className='w-[85%] m-auto'>
      <Value />
      </div>

      <div className='m-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default App
