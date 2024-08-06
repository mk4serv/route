import React from 'react'
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div>



            <footer className="bg-slate-700 shadow dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-10">
                    <div className="sm:flex sm:items-center sm:justify-between text-white">
                    <div className="text-center">
                    <Link to="" className="items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl font-semibold text-white">LOCATION</span>
                        </Link>
                        <p>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
 
                        <div className="text-center">
                            <span className="self-center text-2xl font-semibold text-white">AROUND THE WEB</span>
                            <div className='icons'>
                                <Link to="#"><i className='fa-solid fa-brands fa-facebook mx-2 text-white'></i></Link>
                                <Link to="#"><i className='fa-solid fa-brands fa-instagram mx-2 text-white'></i></Link>
                                <Link to="#"><i className='fa-solid fa-brands fa-twitter mx-2 text-white'></i></Link>
                                <Link to="#"><i className='fa-solid fa-brands fa-youtube mx-2 text-white'></i></Link>
                            </div>
                        </div>
                        <div className="text-center">
                            <span className="self-center text-2xl font-semibold text-white">ABOUT FREELANCER</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </footer>


        </div>
    )
}
