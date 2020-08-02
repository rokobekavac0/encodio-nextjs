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
        tw`transition duration-150 ease-in-out text-white font-normal rounded-sm md:text-base hover:text-gray-300 text-sm lowercase py-2 md:px-4 px-3 flex items-center`,
        className
      )}
    >
      {icon && <div className={css(tw`fill-current w-4 h-4 mr-2`)}>{icon}</div>}
      <span >{text}</span>
    </button>
  );
};
