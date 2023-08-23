import Head from "next/head"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import Script from "next/script"
import { Html } from "next/document"

export const Container = ({ title, children }) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            {typeof window !== 'undefined' && (
                <Script
                id="adsbygoogle-init"
                strategy="afterInteractive"
                crossOrigin="anonymous"
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5912010310110935" />
            )}
            <meta name="description" content="Fazley Rabbi Portfolio" key="desc" />
            <meta property="og:title" content="Fazley Rabbi Web Developer Portfolio" />
            <meta
            property="og:description"
            content="Web developer portfolio laravel developer"
            />
            <meta
            property="og:image"
            content="https://fazleyrabbi.xyz/me.webp"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap" rel="stylesheet" />
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