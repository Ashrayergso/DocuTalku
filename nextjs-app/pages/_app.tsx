import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DocumentRetrievalSystem from '../components/DocumentRetrievalSystem'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DocumentRetrievalSystem>
      <Component {...pageProps} />
    </DocumentRetrievalSystem>
  )
}

export default MyApp