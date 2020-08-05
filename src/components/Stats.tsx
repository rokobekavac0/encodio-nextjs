import React from "react";
import { IDecodedData } from "../pages/decode";
import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

interface StatsProps {
  data: IDecodedData | null;
}

export const Stats: React.FC<StatsProps> = ({ data }) => {
  const isData: () => boolean = () => !!data;

  const StatsIsEncoded = () => {
    return isData() ? (
      data?.isEncryped ? (
        <span className={css(tw`text-green-500`)}>Text is encoded.</span>
      ) : (
        <span className={css(tw`text-red-600`)}>Text doesn't appear to be encoded.</span>
      )
    ) : (
      <span>No text to evaluate</span>
    );
  };

  return (
    <div className={css(tw`h-auto text-sm sm:text-sm font-bold origin-top  sm:p-4 p-3 flex-col flex  font-mono`)}>
      <h1 className={css(tw``)}></h1>
      <h2 className={css(tw``)}>
        Encoded words will appear <span className={css({ background: "linear-gradient(45deg, #f7ff0077 0%, #db36a477 100%)", color: "black", padding: "1px 2px" })}>highlighted</span>.
      </h2>
      <h2 className={css(tw``)}>{StatsIsEncoded()} </h2>
      <h2 className={css(tw``)}>
        {data?.isEncryped ? (
          <>
            Encoded percentage*: <span className={css(tw`font-black`)}>{(data.amount! * 100).toFixed(2)}%</span>
          </>
        ) : (
          <></>
        )}{" "}
      </h2>
    </div>
  );
};
