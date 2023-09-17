import '@/styles/globals.css'
import Layout from '@/page-components/Layouts'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
}
