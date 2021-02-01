import React from "react";
import tw from "@tailwindcssinjs/macro";
import { css } from "@emotion/css";
interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={css(tw`text-sm sm:text-base md:py-13 py-8 px-2 mt-12 bg-footerBlack text-white flex flex-col text-center justify-center content-center`)}>
      <div className={css(tw`flex items-center justify-center`)}>
        <div>Made by</div>
        <a href="https://twitter.com/bekavac_roko" rel="noopener" target="_blank" className={css(tw`text-secundaryFooter px-1`)}>
          <strong>@bekavac_roko</strong>
        </a>
        <div> with </div>
        <svg xmlns="http://www.w3.org/2000/svg" className={css(tw`w-4 h-4 inline ml-1`)} viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
        <div>.</div>
      </div>
      <div>2021</div>
    </div>
  );
};
