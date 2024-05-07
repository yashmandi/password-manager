import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-700 '>
            <div className='flex  items-center gap-4 px-4 justify-between p-4 py-4 mycontainer'>
                <div className="logo text-2xl text-white font-bold">Password Manager</div>
            </div>
        </nav>
    )
}

export default Navbar