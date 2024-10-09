import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-4xl font-bold text-center'>$49.99</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>50 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 1GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3 hover:text-[#00df9a] hover:bg-black hover:scale-105 duration-300' >Start Trial</button>
        </div>
        <div className="w-full shadow-xl bg-slate-100 flex flex-col my-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Patnership</h2>
            <p className='text-4xl font-bold text-center'>$99.9</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>150 GB Storage</p>
                <p className='py-2 border-b mx-8'>2 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 3GB</p>
            </div>
            <button className='bg-black text-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3 hover:bg-[#00df9a] hover:text-black hover:scale-105 duration-300'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-4xl font-bold text-center'>$149.99</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>Unlimited User</p>
                <p className='py-2 border-b mx-8'>Send upto 5GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3 hover:text-[#00df9a] hover:bg-black hover:scale-105 duration-300'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Card
