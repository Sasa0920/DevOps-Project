import React from 'react'
import  Navbar  from '../../Components/Navbar/Navbar'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'

export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow">
          <Banner />
      </main>
      <Footer/>
    </div>
  )
}
export default Home