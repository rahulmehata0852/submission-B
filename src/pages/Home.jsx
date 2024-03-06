import React from 'react'
import Navbar from '../compo/Navbar'
import Header from '../compo/Header'
import Card from '../compo/Card'
import Deals from '../compo/Deals'
import Footer from '../compo/Footer'

const Home = () => {
    return <>
        <div className='bg-customColor h-screen'>
            <Navbar />
            <Header />
            <Card />
            <Deals />
            <Footer />
        </div>
    </>
}

export default Home