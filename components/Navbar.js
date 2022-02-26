import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DarkMode } from './DarkMode';

export const Navbar = () => {
    const router = useRouter();
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };
    
    return (
        <div className="fixed w-full z-10 top-0 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 backdrop-brightness-100 firefox:bg-white firefox:dark:bg-gray firefox:bg-opacity-20">
            <nav className='container mx-auto flex items-center justify-items-center justify-between flex-wrap bg-transparent py-6 text-black dark:text-white dark:bg-transparent order-1 gap-4 '>
                <Link href='/'>
                    <a className='inline-flex items-center mr-4'>
                        <span className='text-2xl text-black dark:text-white font-bold uppercase tracking-wide'>
                            Fazley
                        </span>
                    </a>
                </Link>

                <div
                    className={`${active ? '' : 'hidden'
                        }   w-full lg:inline-flex lg:flex-grow lg:w-auto order-2`}
                >
                    <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto gap-4 font-semibold'>
                        <Link href='/about'>
                            <a className={`${router.pathname.includes("/about") ? 'bg-gray-100 ' : "dark:text-white"} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded   items-center text-black  justify-center hover:bg-gray-100 dark:hover:text-black`}>
                                About
                            </a>
                        </Link>

                        <Link href='/projects'>
                            <a className={`${router.pathname.includes("/projects") ? 'bg-gray-100' : "dark:text-white"} lg:inline-flex lg:w-auto w-full px-3 py-2 rounded  items-center justify-center text-black hover:bg-gray-100 dark:hover:text-black`}>
                                Project
                            </a>
                        </Link>

                        <Link href='/blogs'>
                            <a className={`${router.pathname.includes("/blogs") || router.pathname.includes("/blog") ? 'bg-gray-100' : "dark:text-white"} lg:inline-flex lg:w-auto w-full text-black px-3 py-2 rounded items-center justify-center hover:bg-gray-100 dark:hover:text-black`}>
                                Blogs
                            </a>
                        </Link>

                        

                    </div>
                </div>



                <div className='lg:order-3'>
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
                    <DarkMode />
                </div>
            </nav>
        </div>
    );
};