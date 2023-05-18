import React from 'react'
import myData from '../../data'
import './projects.css'
import bikeImg from "../../images/bikebatallion.jpg";
import babyImg from "../../images/baby.jpg"
import crypto from "../../images/crypto-info.jpg"



function Projects() {

  const bikeBatallion = myData[2].proj_1;
  const mommiesBaby = myData[2].proj_2
  return (
    <div className='project-content'>
      {/* Page Title */}
      <h1 className='text-center text-blue-300 text-4xl font-bold mt-[45px]'>My Projects</h1>
      {/* Project Container */}
      <div className='grid grid-cols-1 md:grid-cols-2 my-[50px]'>

        {/* Project 1 */}
        <div className='text-center pt-[50px] md:pt-[100px]'>
          <p className='text-white text-3xl font-semibold'>Crypto Enquiry</p>
          <a href="https://hrlslmn.github.io/Crypto-info/" className='text-white underline' target='_blank' rel="noreferrer">View </a>
        </div>
        <div className='text-center pt-[50px] md:pt-[100px] md:pr-[20px] p-3' >
            <img src={crypto} alt="" className='border-blue-400 border-2 rounded-lg shadow-lg'/>
        </div>

        {/* Project 2 */}
        <div className='text-center pt-[50px] md:pt-[100px]'>
            <p className='text-white text-3xl font-semibold'>{mommiesBaby}</p>
            <a href="https://www.mommiesbaby.com/" className='text-white underline' target='_blank' rel="noreferrer">View </a>
        </div>
        <div className='text-center pt-[50px] md:pt-[50px] md:pr-[20px] p-3' >
            <img src={babyImg} alt="" className='border-blue-400 border-2 rounded-lg shadow-lg'/>
        </div>

        {/* Project 3 */}
        <div className='text-center pt-[20px]'>
            <h2 className='text-white text-3xl font-semibold'>{bikeBatallion}</h2>
            <a href="https://www.bikebatallion.com/" className='text-white underline' target='_blank' rel="noreferrer">View </a>
        </div>
        <div className='text-center pt-[50px] md:pt-[20px] md:pr-[20px] p-3 ' >
            <img src={bikeImg} alt="" className='border-blue-400 border-2 rounded-lg shadow-lg'/>
        </div>

        {/* Project 4 */}
        <div className='text-center pt-[50px] md:pt-[100px]'>
            <p className='text-white'>Project 4 description</p>
        </div>
        <div className='text-center pt-[50px] md:pt-[100px] md:pr-[20px]' >
            <p className="text-white">Project 4 images</p>
        </div>
      </div>
    </div>
  )
}

export default Projects