import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import Cursor from '../components/ui/Cursor';

function MyApp({ Component, pageProps }) {
  return (
    <>
  <ThemeProvider enableSystem={true} attribute="class">
     <Component {...pageProps} />
  </ThemeProvider>
  <Cursor />
  </>
  )
}

export default MyApp
