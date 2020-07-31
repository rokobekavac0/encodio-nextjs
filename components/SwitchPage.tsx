import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

interface SwitchPageProps {
  page: "encode" | "decode";
}

export const SwithPage = ({ page }: SwitchPageProps) => {
  return (
    <a>
      Need to <strong className={css(tw`font-bold`)}>{page}</strong> some text?
    </a>
  );
};
