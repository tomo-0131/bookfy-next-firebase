import { AuthProvider } from '../providers/AuthProvider'
import "/styles/styles.css"

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
