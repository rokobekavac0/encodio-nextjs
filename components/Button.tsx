import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { createVerify } from "crypto";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  disabled?: boolean;
  className?: any;
  icon?: any;
}

export const Button = ({ onClick, disabled, text, icon, className }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={css(
        tw`transition  duration-150 ease-in-out text-white font-normal rounded-sm md:text-base text-sm lowercase py-2 md:px-4 px-3 flex items-center`,
        className,
        disabled ? tw`bg-opacity-75 opacity-75` : tw`hover:text-gray-300 `
      )}
    >
      {icon && <div className={css(tw`fill-current flex justify-center  items-center w-4 h-4 mr-2`)}>{icon}</div>}
      <span>{text}</span>
    </button>
  );
};
