import React from "react";
import tw from "@tailwindcssinjs/macro";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import { GoHeart } from "react-icons/go";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={css(tw`text-sm sm:text-base md:h-40 md:mt-14 mt-10 h-36 bg-footerBlack text-white flex flex-col text-center justify-center content-center`)}>
      <div>
        Made by{" "}
        <a href="https://github.com/rokobekavac0" className={css(tw`text-secundaryFooter`)}>
          <motion.strong
            animate={{
              rotateZ: ["0deg", "-20deg", "20deg", "0deg"],
              scale: [1, 1.2, 0.9, 1],
              display: "inline-block",
            }}
            transition={{
              loop: Infinity,
              duration: 0.4,
              delay: 3,
              repeatDelay: 3,
            }}
          >
            Roko
          </motion.strong>
        </a>{" "}
        with <GoHeart className={css(tw`inline`)} />. Build using NextJS.
        <div></div>
        The source code is licensed
        <a className={css(tw`text-secundaryFooter`)} href="https://opensource.org/licenses/Apache-2.0">
          {" "}
          Apache-2.0
        </a>
        .
      </div>
    </div>
  );
};
