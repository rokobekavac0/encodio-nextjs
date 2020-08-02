import React from 'react'
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
interface FaqProps {

}

export const Faq = ({ }: FaqProps) => {
    return (
        <>
            <div className={css(tw`md:pt-2 pb-2 pt-6`)}>
                <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl md:pb-2 pb-1 md:text-2xl`)}>How to use Encodio?</h1>
                <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
                    <li><strong className={css(tw`font-bold text-white`)}>Step 1.</strong>  Paste text</li>
                    <li> <strong className={css(tw`font-bold text-white`)}>Step 2.</strong>  Encode it. <span className={css(tw`text-white`)}>(You don't have to worry about this step)</span></li>
                    <li><strong className={css(tw`font-bold text-white`)}>Step 3.</strong>   Copy encoded text and paste it elsewhere</li>
                    <li><strong className={css(tw`font-bold text-white`)}> {">"} </strong>   You came across your supossedly encoded text <span className={css(tw`text-white`)}>(or varation of it)</span>?</li>
                    <li><strong className={css(tw`font-bold text-white`)}>Step 5.</strong>   Paste the 'encoded' text into our <a>decoder</a></li>
                    <li><strong className={css(tw`font-bold text-white`)}>Step 6.</strong>   Now you should see if that text was copied  <span className={css(tw`font-normal text-white`)}>(and how much) </span>from you</li>

                </ul>
            </div>
            <div className={css(tw`md:pt-2 pb-2 pt-4`)}>
                <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl pb-1  md:pb-2 md:text-2xl`)}>What you should know</h1>
                <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
                    <li><strong className={css(tw`font-bold text-white pr-1`)}>{">"}</strong> Not all fonts support encoded letters so they may look obivous</li>
                    <li><strong className={css(tw`font-bold text-white pr-1`)}>{">"}</strong> Encodio does not store any of your encoded/decoded data <span className={css(tw`text-white`)}>(text you pasted/entered)</span></li>
                </ul>
            </div>
            <div className={css(tw`md:pt-2 pt-6 pb-2`)}>
                <h1 className={css(tw`font-extrabold text-white tracking-tight text-xl md:pb-2 pb-1 md:text-2xl`)}>How it works?</h1>
                <ul className={css(tw`font-normal text-gray-400 space-y-1`)}>
                    <li><strong className={css(tw`font-bold text-white pr-1`)}></strong></li>
                </ul>
            </div>
        </>
    );
}