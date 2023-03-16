
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useState } from 'react'
import About from '../components/About'
import Footer from '../components/Footer'
import Homes from '../components/Homes'
import Offer from '../components/Offer'
import Services from '../components/Services'


export default function Home() {


  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const [location, setLocation] = useState('Dhaka')
  const [houseType, setHouseType] = useState('apartment')
  const [priceRange, setPriceRange] = useState('50K-100K')
  // have to create search result page
  return (
    <>
      <Head>
        <title>
          Happy Estate
        </title>
      </Head>
      <main className='home flex flex-col items-center bg-black text-white '>
        {/* <Navbar /> */}

        <div className=' w-[60vw] h-full mt-20 text-center'>

          <h1 className='text-4xl md:text-7xl  font-bold'>Your perfect home is waiting for you</h1>
          <p className='text-xl font-semibold my-10
        '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae enim nesciunt doloremque debitis qui quam.</p>

          <button className='bg-white text-black px-6 py-2 font-semibold text-xl rounded-md'>Explore Us</button>

        </div>

        {/* search box */}
        <div className='flex flex-col md:flex-row items-center justify-between text-black w-full lg:max-w-[65vw] bg-white
        dark:bg-gray-200 py-5 rounded-md px-10 relative md:absolute  mt-[20%] md:mt-[25%] shadow-md'>
          <div>
            <h1>Location</h1>
            <input type="text" placeholder='Enter Location'
              className='text-pink-500 outline-none mt-1 text-lg font-medium
            pl-1 rounded-md py-1 bg-transparent'
              value={location}
              onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <h1>Type</h1>
            <input type="text" placeholder='Enter house type' className='text-pink-500 outline-none mt-1 text-lg font-medium px-2 rounded-md py-1 bg-transparent'
              value={houseType}
              onChange={(e) => setHouseType(e.target.value)} />
          </div>
          <div>
            <h1>Price range</h1>
            <input type="text" placeholder='Enter price range'
              className='text-pink-500 outline-none mt-1 text-lg font-medium bottom-1 
             px-2 rounded-md py-1 bg-transparent'
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)} />
          </div>

          <button className='bg-indigo-700 text-white px-6 py-2 rounded-md'>Search</button>

        </div>
      </main>

      <About />

      <Homes />

      <Services />

      <Offer />

      <Footer />
    </>
  )
}