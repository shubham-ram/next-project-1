import '@/styles/globals.css'
import Layout from '@/page-components/Layouts'

export default function App({ Component, pageProps }) {
  const MainLayout = Component?.getLayout || Layout;

  return (
    <MainLayout>
        <Component {...pageProps} />
    </MainLayout>
  )
}
