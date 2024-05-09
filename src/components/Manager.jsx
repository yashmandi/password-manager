import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

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

    const copyText = (text) => {
        toast('Copied to clipboard!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }

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
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        console.log([...passwordArray, form]);
        setform({ site: "", username: "", password: "" })
    }

    const deletePassword = (id) => {
        console.log("Deleting Password: ", id);
        let c = confirm("Are you sure you want to delete this password?")
        // toast('Deleted Password!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }

    }

    const editPassword = (id) => {
        console.log("Editing Password: ", id);
        setform(passwordArray.filter(i => i.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />

            <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className="p-2 md:p-0 md:mycontainer ">
                <div className='p-4 flex flex-col justify-center'>
                    <img src="icons/password.png" className='w-12 h-12 mx-auto ' />
                    <h1 className='text-3xl font-bold py-3 text-center'>
                        SafeCypher
                    </h1>
                    <p className='text-center text-md mt-[-4px] italic'>Unlock Security with SafeCypher</p>
                </div>

                <div className='text-white flex flex-col p-4 text-black gap-3 items-center'>

                    <input value={form.site} onChange={handleChange} className='rounded-xl border text-black border-blue-800 p-4 py-1 w-full md:w-[300px]' placeholder='Enter Website URL' type="text" name="site" id="site" />

                    <div className='flex flex-col md:flex-row w-full justify-center gap-3'>
                        <input value={form.username} onChange={handleChange} className='rounded-xl border text-black border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Username' type="text" name="username" id="username" />

                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} className='rounded-xl text-black border border-blue-800 p-4 py-1 w-[300px]' placeholder='Enter Password' type="password" name="password" id="password" />
                            <span className='absolute right-0 top-0 cursor-pointer' onClick={showPassword}>
                                <img ref={ref} src="icons/open-eye.png" width={20} height={40} className='mt-[7px] mr-2' alt="eye" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex gap-3 mt-2 justify-center items-center bg-blue-500 hover:bg-blue-400 rounded-xl px-1 py-1 w-32 '>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>  Save
                    </button>
                </div>

                <div className="passwords">
                    <h2 className='text-2xl font-bold text-center py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div className='text-center'>No passwords to show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden">
                        <thead className='bg-blue-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-blue-100 '>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex items-center justify-center'>
                                            <a href={item.site} target='_blank'>{item.site}</a>
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
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
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.username)}>
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
                                            <div className='lordiconcopy size-7 cursor-pointer' onClick={() => copyText(item.password)}>
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
                                        <span className='cursor-pointer mx-2' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}
                                            >
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-2' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}
                                            >
                                            </lord-icon>
                                        </span>
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