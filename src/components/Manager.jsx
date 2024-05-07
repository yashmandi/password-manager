import React, { useEffect } from 'react'
import { useRef, useState } from 'react'

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const showPassword = () => {
        passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/close-eye.png")) {
            ref.current.src = "icons/open-eye.png";
            passwordRef.current.type = "text";
        } else {
            ref.current.src = "icons/close-eye.png"
            passwordRef.current.type = "password";
        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray);
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className=" mycontainer">
                <h1 className='text-3xl font-bold text-center'>Password Manager</h1>
                <p className='text-center text-lg '>Your own password manager</p>

                <div className='text-white flex flex-col p-4 text-black gap-3 items-center'>

                    <input value={form.site} onChange={handleChange} className='rounded-xl border text-black border-blue-800 p-4 py-1 w-full' placeholder='Enter Website URL' type="text" name="site" id="" />

                    <div className='flex w-full justify-center gap-3'>
                        <input value={form.username} onChange={handleChange} className='rounded-xl border text-black border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Username' type="text" name="username" id="" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-xl text-black border border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Password' type="password" name="password" id="" />
                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} src="icons/open-eye.png" width={20} height={40} className='mt-[7px] mr-2' alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex gap-2 mt-2 justify-center items-center bg-blue-500 hover:bg-blue-400 rounded-xl px-1 py-1 w-44 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon> Add Password
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='text-2xl font-bold text-center py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-blue-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-blue-100 '>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={copyText(item.site)}>
                                                <lord-icon
                                                    style={{ width: 25, height: 25, "padding": "5px" }}
                                                    className='cursor-pointer'
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center w-32'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.username}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={copyText(item.username)}>
                                                <lord-icon
                                                    style={{ width: 25, height: 25, "padding": "5px" }}
                                                    className='cursor-pointer'
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center w-32'>
                                        <div className='flex items-center justify-center'>
                                            <span>{item.password}</span>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={copyText(item.password)}>
                                                <lord-icon
                                                    style={{ width: 25, height: 25, "padding": "5px" }}
                                                    className='cursor-pointer'
                                                    src="https://cdn.lordicon.com/iykgtsbt.json"
                                                    trigger="hover">
                                                </lord-icon>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </div>

        </div>
    )
}

export default Manager