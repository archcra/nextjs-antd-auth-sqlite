import '../styles/globals.css'
import "../styles/antd.less";
import Head from 'next/head'

import { Provider } from 'next-auth/client'


function MyApp({ Component, pageProps }) {
  return (

  <Provider session={pageProps.session}>
  <>
     <Head>
     </Head>
     <Component {...pageProps} />
   </>
</Provider>
  )
}

export default MyApp
