import tw from "@tailwindcssinjs/macro";
import { motion } from "framer-motion";
import { css } from "@emotion/css";
import { ColoredDot } from "@/components/coloredDot";
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
        <div>Detect copied* text in an instant</div>
        <ColoredDot />
      </div>
    </>
  );
};
