import Head from "next/head";
import "../styles/base.css";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  pageInitial: {
    // backgroundColor: "black",
    // filter: `invert()`,
    opacity: 0.2,
  },
  pageAnimate: {
    // backgroundColor: "transparent",
    // filter: ``,
    opacity: 1,
  },
  pageExit: {
    // backgroundColor: "black",
    // filter: ``,
    opacity: 0,
  },
};

const pageMotionProps = {
  initial: "pageInitial",
  animate: "pageAnimate",
  exit: "pageExit",
  variants: pageVariants,
};

export default function MyApp({ Component, pageProps, router }: AppPropsType) {
  return (
    <>
      <Head>
        <title>Encodio</title>
        <meta name="description" content="Encodio is anti-copy-paste text encoder..." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <motion.div transition={{ duration: 0.3 }} key={router.route} {...pageMotionProps}>
          <Component className={css(tw`bg-black text-primary-100`)} {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
