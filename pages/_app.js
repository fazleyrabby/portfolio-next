import { ScrollToTop } from '../components/ScrollToTop'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps}/>
      <ScrollToTop/>
    </ThemeProvider>
    
  )

}

export default MyApp
