import Head from "next/head"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import Script from "next/script"
import { env } from "../lib/static"

export const Container = ({ title, children }) => {
    return (
        <>
            <Script
                id="googleAnalyticsinit"
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS}`}
            />
            <Script
                id="Adsense-id"
                data-ad-client="ca-pub-5912010310110935"
                async="true"
                strategy="beforeInteractive"
                crossorigin="anonymous"
                onError={ (e) => { console.error('Script failed to load', e) }}
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            />
            <Script id="googleAnalytics" strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${env.GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
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