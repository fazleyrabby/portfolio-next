import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps}/>
    </ThemeProvider>
    
  )

}

export default MyApp
