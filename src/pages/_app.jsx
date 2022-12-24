import '@/styles/globals.scss'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { SessionProvider } from 'next-auth/react'

import appWithSession from '@/hoc/appWithSession'
import Layout from '../components/layouts/Layout'
import CartProvider from '../../context/CartProvider'

function MyApps({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Layout>
      </CartProvider>
    </SessionProvider>
  )
}

export default appWithSession(appWithTranslation(MyApps))
