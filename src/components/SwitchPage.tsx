import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import Link from "next/link";
interface SwitchPageProps {
  page: "encode" | "decode";
}

export const SwithPage = ({ page }: SwitchPageProps) => {
  return (
    <div>
      Need to{" "}
      <strong className={css(tw`font-bold underline`)}>
        <Link href={page === "decode" ? "/decode" : "/"}>
          <a>{page}</a>
        </Link>
      </strong>{" "}
      some text?
    </div>
  );
};
