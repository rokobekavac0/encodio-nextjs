import Head from 'next/head'
import '../styles/base.css'
import { AppPropsType } from 'next/dist/next-server/lib/utils'
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

export default function MyApp({ Component, pageProps }: AppPropsType) {
  return (
    <>
      <Head>
        <title>Encodio</title>
        <meta name="description"
          content="Encodio is anti-copy-paste text encoder..." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Component className={css(tw`bg-black`)} {...pageProps} />
    </>
  )
}
