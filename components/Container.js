import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Container = ({ children }) => {
    return (
        <div className='flex flex-col h-screen justify-between'>
            <div className='container mx-auto px-4 w-full'>
                <Navbar />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}