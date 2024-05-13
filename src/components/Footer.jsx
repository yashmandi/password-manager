import React from 'react'
import { FaHeart, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='bg-blue-900 text-white text-xs font-semibold p-4 flex flex-row justify-center fixed bottom-0 w-full'>
            <div className='flex justify-center items-center h-1'>
                <a href="https://github.com/yashmandi">
                    <FaGithub className='text-white w-4 h-4 mx-2' />
                </a>
                <a href="https://github.com/yashmandi" target="_blank">Yash Mandi</a>
            </div>
        </div>
    )
}

export default Footer