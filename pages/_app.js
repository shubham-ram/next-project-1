import '@/styles/globals.css'
import Layout from '@/page-components/Layouts'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function App({ Component, pageProps }) {
  const MainLayout = Component?.getLayout || Layout;


  return (
    <Provider store={store}>
      <MainLayout>
          <ToastContainer />
          <Component {...pageProps} />
      </MainLayout>
    </Provider>

  )
}
