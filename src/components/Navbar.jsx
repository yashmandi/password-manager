import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-700 '>
            <div className='flex  items-center gap-4 px-4 justify-between p-4 py-4 mycontainer'>
                <div className="logo text-2xl text-white font-bold flex flex-row"> <img src="icons/password.png" className='w-8 h-8 mr-3' />SafeCypher </div>
                <span className='text-md mt-2 italic font-normal text-white'>...secure your passwords, with SafeCypher!</span>
            </div>
        </nav>
    )
}

export default Navbar