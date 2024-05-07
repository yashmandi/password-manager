import React from 'react'
import { FaHeart } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-blue-900 text-white text-xs font-bold p-4 flex flex-row justify-center fixed bottom-0 w-full'>
            <div className='flex justify-center items-center h-1'>Created with <FaHeart className='text-red-600 w-4 h-4  mx-1' /> by Yash
            </div>
        </div>
    )
}

export default Footer