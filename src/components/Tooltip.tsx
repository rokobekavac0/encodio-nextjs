import React, { useState, ReactNode, useRef, useEffect } from "react";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

interface TooltipProps {
  text: string;
  disabled?: boolean;
  children: ReactNode;
  className: any;
  durationAfterLastClick: number;
}

export const Tooltip = ({ text, disabled, children, durationAfterLastClick, className }: TooltipProps) => {
  const [hoverMain, setHoverMain] = useState<boolean>(false);
  const [lastTm, setLastTm] = useState<number>(0);
  const ref = useRef<number>();
  ref.current = lastTm;
  // prevent mem leak if user has switched page
  useEffect(() => {
    return function cleanup() {
      if (ref.current !== 0) clearTimeout(ref.current);
    };
  }, []);
  return (
    <p
      className={css(tw`relative`)}
      onClick={() => {
        if (!disabled) {
          clearTimeout(lastTm);
          const nTm = window.setTimeout(() => {
            setHoverMain(false);
          }, durationAfterLastClick);
          setLastTm(nTm);
          setHoverMain(true);
        }
      }}
    >
      {children}
      <span
        className={css(
          tw`p-3 z-40 cursor-pointer absolute  mt-1 transition duration-500 ease-in-out left-0 right-0 ml-auto mr-auto  px-1 py-1 text-center rounded `,
          hoverMain ? tw`opacity-100` : tw`opacity-0`,
          className
        )}
      >
        {" "}
        {text}
      </span>
    </p>
  );
};
