import tw from "@tailwindcssinjs/macro";
import { motion, AnimatePresence } from "framer-motion";
import { css } from "@emotion/css";
import { ColoredDot } from "./coloredDot";
import { useState, useRef, useEffect } from "react";

export const Header = () => {
  const [textisEncoded, setTextIsEncoded] = useState<boolean>(true);
  const ref = useRef<boolean>();

  ref.current = textisEncoded;

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIsEncoded(!ref.current);
    }, 6000);

    return function cleanup() {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.h1
        animate={{
          backgroundImage: ["linear-gradient(0deg, #f7ff00 0%, #db36a4 90%)", "linear-gradient(360deg, #f7ff00 10%,#db36a4 90%)"],
        }}
        transition={{
          loop: Infinity,
          ease: "linear",
          duration: 7,
        }}
        className={css(tw`text-5xl md:text-6xl pr-0.5 inline-flex tracking-tighter font-black leading-none`, {
          filter: "saturate(170%)",
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        })}
      >
        Encodio
      </motion.h1>

      <div className={css(tw`text-xl flex-row flex-wrap flex md:text-2xl md:pt-3 pt-1 tracking-tighter md:tracking-tight font-bold text-white`)}>
        <div>Anti copy-paste text&nbsp;</div>
        <div className={css(tw`relative`)}>
          <AnimatePresence>
            {textisEncoded && (
              <motion.div
                initial={{ y: "-100%", opacity: 0.2 }}
                animate={{ y: "0px", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                className={css(tw`text-white  absolute`)}
                transition={{
                  // delay: 0.2,
                  duration: 0.4,
                }}
              >
                encoder
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!textisEncoded && (
              <motion.div
                initial={{ y: "-100%", opacity: 0.2 }}
                animate={{ y: "0px", opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                className={css(tw`text-white absolute `)}
                transition={{
                  duration: 0.4,
                  // delay: 0.2
                }}
              >
                decoder
              </motion.div>
            )}
          </AnimatePresence>
          <div className={css(tw`md:ml-20 md:pl-3.5 ml-16 pl-2.5`)}>
            <ColoredDot />
          </div>
        </div>
      </div>
    </>
  );
};
