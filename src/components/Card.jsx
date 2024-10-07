import React from 'react'
import Single from '../components/assets/single.png'
import Double from '../components/assets/double.png'
import Triple from '../components/assets/triple.png'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-4xl font-bold text-center'>$146</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 2GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl bg-slate-100 flex flex-col m-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Patnership</h2>
            <p className='text-4xl font-bold text-center'>$146</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 2GB</p>
            </div>
            <button className='bg-black text-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-4xl font-bold text-center'>$146</p>
            <div className='font-medium text-center'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send upto 2GB</p>
            </div>
            <button className='bg-[#00df9a] rounded-md font-medium w-[180px] my-6 mx-auto px-auto py-3'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Card
