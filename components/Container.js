import Head from "next/head"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import Script from "next/script"

export const Container = ({ title, children }) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            {typeof window !== 'undefined' && (
                <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5912010310110935" />
            )}
        </Head>
        <Navbar />
        <div className='flex flex-col h-screen justify-between'>
            <div className='container mx-auto w-full mt-32 md:mt-24'>
                    {children}
            </div>
            <Footer />
        </div>
        </>
    )
}