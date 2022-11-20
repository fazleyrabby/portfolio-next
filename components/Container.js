import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Container = ({ children }) => {
    return (
        <>
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