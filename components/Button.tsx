import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { createVerify } from "crypto";

interface ButtonProps {
  onClick: () => void;
  text: string;
  className?: any;
  icon?: any;
}

export const Button = ({ onClick, text, icon, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={css(
        tw`text-white font-normal md:text-base text-sm lowercase py-2 md:px-4 px-3 inline-flex items-center`,
        className
      )}
    >
      {icon && <div className={css(tw`fill-current w-4 h-4 mr-2`)}>{icon}</div>}
      <span>{text}</span>
    </button>
  );
};
