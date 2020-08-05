import React, { RefObject } from "react";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Spinner } from "./Spinner";

interface TextareaProps {
  inputRef?: RefObject<HTMLTextAreaElement>;
  value: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  labelText: string;
  id: string;
  showSpinner: boolean;
  spinnerClassName?: string;
  hasError?: boolean;
  isReadOnly?: boolean;
  placeHolder: string;
  hasSpinner?: boolean;
}

export const Textarea: React.FC<TextareaProps> = ({ id, showSpinner, hasSpinner, isReadOnly = false, labelText, onChange, value, spinnerClassName, placeHolder, inputRef, hasError }) => {
  return (
    <>
      <label htmlFor={id} className={css(tw`text-white  font-bold tracking-normal`)}>
        {labelText}
      </label>
      <div className={css(tw`relative`)}>
        <Spinner show={showSpinner} className={css(tw`absolute top-4 text-secundaryFooter right-0`, spinnerClassName)} />
        <textarea
          id={id}
          value={value}
          readOnly={isReadOnly}
          spellCheck={false}
          ref={inputRef}
          onChange={onChange}
          placeholder={placeHolder}
          className={css(
            tw`shadow resize-none  sm:text-base text-sm appearance-none font-bold tracking-normal mt-2 py-2 h-32 md:h-40 border bg-black w-full text-white font-mono mb-3 rounded-none`,
            hasError ? tw`text-red-700` : tw``,
            hasSpinner ? tw`pl-3 pr-10` : tw` px-3`
          )}
        ></textarea>
      </div>
    </>
  );
};

// (e) => {
//     setInput(e.target.value);
//   }
