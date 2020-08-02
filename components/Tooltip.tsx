import React, { useState, ReactNode, useRef } from 'react'
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

interface TooltipProps {
    text: string
    children: ReactNode
    className: any
    durationAfterLastClick: number
}

export const Tooltip = ({ text, children, durationAfterLastClick, className }: TooltipProps) => {
    const [hoverMain, setHoverMain] = useState<boolean>(false);
    const [lastTm, setLastTm] = useState<number>(0);
    return (
        <p className={css(tw`relative`)} onClick={() => {
            clearTimeout(lastTm);
            const nTm = window.setTimeout(() => {
                setHoverMain(false);
            }, durationAfterLastClick);
            setLastTm(nTm);
            setHoverMain(true);
        }} >
            {children}
            < span className={css(tw`p-3 z-40 cursor-pointer absolute  mt-1 transition duration-500 ease-in-out left-0 right-0 ml-auto mr-auto  px-1 py-1 text-center rounded `, hoverMain ? tw`opacity-100` : tw`opacity-0`, className)}> {text}</span >
        </p >
    );
}