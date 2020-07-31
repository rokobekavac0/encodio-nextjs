import Head from 'next/head'
import '../styles/base.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <title>Encodio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
