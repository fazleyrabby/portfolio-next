import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const DarkMode = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme(typeof window !== "undefined" ? localStorage.theme : "light")


    useEffect(() => setMounted(true), [])

    if (!mounted) return <button className='inline-flex hover:bg-gray-100 text-black dark:hover:text-black rounded  ml-auto  outline-none group overflow-hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2 dark:stroke-white stroke-transparent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg></button>

    return (<button className='inline-flex hover:bg-gray-100 text-black dark:hover:text-black rounded ml-auto outline-none group'
        onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')
            // setTimeout(() => e.target.children[0].classList.toggle('animate-[fadein_200ms_linear]'), 200);
        }>
        {theme == 'dark' ? <svg xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 m-2 dark:stroke-white dark:group:sroke-white dark:group-hover:stroke-black"
            fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /> </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2 fill-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        }
    </button>)
}