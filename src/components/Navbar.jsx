import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-purple-200 '>
            <div className='flex  items-center gap-4 px-4 justify-between p-4 py-4 mycontainer'>
                <div className="logo text-2xl font-bold">Password Manager</div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href="">Home</a>
                        <a className='hover:font-bold' href="">About</a>
                        <a className='hover:font-bold' href="">Contact</a>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}

export default Navbar