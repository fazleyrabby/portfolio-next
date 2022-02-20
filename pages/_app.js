import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" >
    <div className='flex flex-col h-screen justify-between'>
    <div className='container mx-auto px-4 w-full'>
      <Navbar/>
      <div className='flex-grow'>
      <Component {...pageProps}/>
      </div>
   
    </div>
       <Footer/>
    </div>
    </ThemeProvider>
    
  )

}

export default MyApp
