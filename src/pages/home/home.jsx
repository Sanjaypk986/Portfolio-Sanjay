import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <main className='flex justify-center items-center'>
      <section className='container mx-auto my-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto p-4 gap-2 md:w-3/4'>
          <div className=' text-white flex flex-col justify-center items-center md:items-start gap-4 p-3'>
              <h3 className='text-2xl md:text-3xl font-semibold '><span className='text-custom-green font-bold mr-2'>&#8212;</span>Hello</h3>
              <h1 className='text-3xl md:text-4xl font-semibold'>I'm <span className='text-custom-green font-bold'>SANJAY PK</span></h1>
              <h2 className='text-3xl md:text-5xl font-semibold whitespace-nowrap '>Fullstack <span className='text-custom-green font-bold'>Developer</span></h2>
              <p className='text-gray-400 text-justify my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos reiciendis libero distinctio, dolor veniam aliquid eveniet quae perspiciatis dicta ab officia nisi repellendus ducimus iusto reprehenderit, cumque assumenda iure. Dolorem.</p>
              <Link className='nav-links-button'>Connect Me</Link>
          </div>
          <div className=''>
            <h2>hello</h2>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
