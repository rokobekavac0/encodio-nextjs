import React from "react";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Footer } from "@/components/Footer";
interface FaqProps {}

export const Faq = ({}: FaqProps) => {
  return (
    <>
      <div className={css(tw`md:pt-2 pb-2 pt-6`)}>
        <h1 className={css(tw`font-light italic text-gray-400 tracking-normal  text-sm md:pb-2 pb-1 md:text-base`)}>*the text must be encoded beforehand</h1>

        <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl md:pb-2 pb-1 md:text-2xl`)}>How to use Encodio?</h1>
        <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
          <li>
            <strong className={css(tw`font-bold text-white`)}>Step 1.</strong> Paste text
          </li>
          <li>
            {" "}
            <strong className={css(tw`font-bold text-white`)}>Step 2.</strong> Encode it. <span className={css(tw`text-white`)}>(We take care of this step)</span>
          </li>
          <li>
            <strong className={css(tw`font-bold text-white`)}>Step 3.</strong> Copy encoded text and paste it elsewhere
          </li>
          <li>
            <strong className={css(tw`font-bold text-white`)}> {">"} </strong> You came across your supposedly encoded text <span className={css(tw`text-white`)}>(or variation of it)</span>?
          </li>
          <li>
            <strong className={css(tw`font-bold text-white`)}>Step 5.</strong> Paste the 'encoded' text into our <a>decoder</a>
          </li>
          <li>
            <strong className={css(tw`font-bold text-white`)}>Step 6.</strong> Now you should see if that text has been copied <span className={css(tw`font-normal text-white`)}></span>from you
          </li>
        </ul>
      </div>
      <div className={css(tw`md:pt-2 pb-2 pt-4`)}>
        <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl pb-1  md:pb-2 md:text-2xl`)}>What you should know</h1>
        <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
          <li>
            <strong className={css(tw`font-bold text-white pr-1`)}>{">"}</strong> Not all fonts support encoded letters so they may look obvious
          </li>
          <li>
            <strong className={css(tw`font-bold text-white pr-1`)}>{">"}</strong> Encodio doesn't store <strong className={css(tw`font-bold text-white pr-1`)}> any</strong>encoded/decoded data <span className={css(tw`text-white`)}>(the text you pasted/entered)</span>
          </li>
          <li>
            <strong className={css(tw`font-bold text-white pr-1`)}>{"*"}</strong> percentage is only an estimate based on the similarity of the patterns
          </li>
        </ul>
      </div>
      <div className={css(tw`md:pt-2 pt-6 pb-2`)}>
        <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl md:pb-2 pb-1 md:text-2xl`)}>How it works?</h1>
        <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
          <li>
            <strong className={css(tw`font-bold text-white pr-1`)}>{">"}</strong> Our algorithm takes input text and replaces individual letters, with almost unrecognisable Unicode characters in a pseudo-random pattern. Later <span className={css(tw`text-white`)}>(during decoding) </span> we can
            extract the pattern of encoded letters and match it with the original pattern to calculate the percentage of encoded text, even if parts of the text are scattered all over the text.
          </li>
        </ul>
      </div>
    </>
  );
};
