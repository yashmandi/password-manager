import React from 'react'
import { useRef } from 'react'

const Manager = () => {
    const ref = useRef(null);
    const showPassword = () => {
        // alert("Show Password");
        if (ref.current.src.includes("icons/close-eye.png")) {
            ref.current.src = "icons/open-eye.png";
        } else {
            ref.current.src = "icons/close-eye.png"
        }
    }

    return (
        <div>
            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className=" mycontainer">
                <h1 className='text-3xl font-bold text-center'>Password Manager</h1>
                <p className='text-center text-lg '>Your own password manager</p>

                <div className='text-white flex flex-col p-4 text-black gap-3 items-center'>
                    <input className='rounded-xl border border-blue-800 p-4 py-1 w-full' placeholder='Enter Website URL' type="text" name="" id="" />
                    <div className='flex w-full justify-center gap-3'>
                        <input className='rounded-xl border border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Username' type="text" name="" id="" />
                        <div className="relative">
                            <input className='rounded-xl border border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Password' type="text" name="" id="" />
                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} src="icons/open-eye.png" width={20} height={40} className='mt-[7px] mr-2' alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button className='flex gap-2 mt-2 justify-center items-center bg-blue-500 hover:bg-blue-400 rounded-xl px-1 py-1 w-44 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon> Add Password
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Manager