import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DarkMode } from './DarkMode';

export const Navbar = () => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };


    return (
        <>
            <nav className='flex items-center flex-wrap bg-white py-6 text-black dark:text-white dark:bg-transparent'>
                <Link href='/'>
                    <a className='inline-flex items-center mr-4'>
                        <span className='text-xl text-black dark:text-white font-bold uppercase tracking-wide'>
                            Fazley
                        </span>
                    </a>
                </Link>

                <div className='inline-flex ml-auto w-100'>
                    <button
                        className=' inline-flex p-3 hover:bg-gray-100 rounded lg:hidden text-black ml-auto  outline-none dark:text-white dark:hover:text-black'
                        onClick={handleClick}
                    >
                        <svg
                            className='w-6 h-6 dark:fill-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>
                    {/* <button
                        className='inline-flex p-3 hover:bg-gray-100 text-black dark:hover:text-black rounded  ml-auto  outline-none group'
                        onClick={darkMode}
                    >
                        {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:stroke-white dark:group:sroke-white dark:group-hover:stroke-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /> </svg> }
                    </button> */}

                    <DarkMode/>

                   
                </div>



                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto `}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto gap-4 font-semibold'>
                        {/* <Link href='/'>
                            <a className={`${router.pathname == "/" ? 'bg-gray-100 dark:text-black' : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black dark:text-white items-center justify-center hover:bg-gray-100 dark:hover:text-black`}>
                                Home
                            </a>
                        </Link> */}
                        <Link href='/about'>
                            <a className={`${router.pathname.includes("/about") ? 'bg-gray-100 dark:text-black' : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center dark:text-white justify-center hover:bg-gray-100 dark:hover:text-black`}>
                                About
                            </a>
                        </Link>

                        <Link href='/projects'>
                            <a className={`${router.pathname.includes("/projects") ? 'bg-gray-100 dark:text-black' : ""} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:text-white hover:bg-gray-100 dark:hover:text-black`}>
                                Project
                            </a>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    );
};