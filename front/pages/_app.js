import '../styles/globals.css'
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <>
        <Head>
          <title>Front Crud Simple</title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </>
    </Provider>
  )
}

export default MyApp
