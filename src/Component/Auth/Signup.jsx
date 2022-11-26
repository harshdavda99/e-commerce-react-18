

import React, { useState } from "react";
// import { useSelector } from "react-redux"
import { useNavigate, Link } from 'react-router-dom'
/* eslint-disable jsx-a11y/img-redundant-alt */
const Signup = () => {
    // const details = useSelector(state => state.Database.register);
    const history = useNavigate();
    const [register] = useState(JSON.parse(localStorage.getItem('userRegister')) || []);
    const [login, setlogindetails] = useState({
        Email: "",
        Password: "",
        FullName: '',
    });
    // console.log('details', details)
    const handlechange = (e) => {
        let { name, value } = e.target;
        setlogindetails({ ...login, [name]: value });
    }

    const checkEmail = () => {
        let reg = [...register];
        if (reg.length > 0) {
            let newlist = reg.filter((list) => list?.Email === login?.Email)
            if (newlist.length > 0) {
                alert('Email already registered')
            } else {
                reg.push(login);
                localStorage.setItem('userRegister', JSON.stringify(reg));
                setlogindetails('');
                history('/login');


            }
        } else {
            reg.push(login);
            localStorage.setItem('userRegister', JSON.stringify(reg));
            setlogindetails('');
            history('/login');
        }
    }
    const HandleSubmit = (e) => {

        e.preventDefault();
        if (login.Email !== '' && login.Password !== '' && login.FullName !== '') {
            checkEmail()
        }
    };

    return (
        <>
            <div className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image"
                            />
                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <form onSubmit={HandleSubmit}>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name="FullName"
                                        onChange={(e) => handlechange(e)}
                                        value={login?.FullName || ''}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Enter Full Name"
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="text"
                                        name="Email"
                                        onChange={(e) => handlechange(e)}
                                        value={login?.Email || ''}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>


                                <div className="mb-6">
                                    <input
                                        type="password"
                                        onChange={(e) => handlechange(e)}
                                        name="Password"
                                        value={login?.Password || ''}
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Sign Up
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account ?
                                        <Link to={"/login"}>
                                            <p className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                            > Login</p>
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;