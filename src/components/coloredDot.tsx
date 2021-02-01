import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";

export const ColoredDot = () => {
  return (
    <span
      className={css(
        {
          WebkitBackgroundClip: "text",
          backgroundImage: "linear-gradient(178deg, #f9d423 0%, #ff4e50 100%)",
          WebkitTextFillColor: "transparent",
        },
        tw`font-black`
      )}
    >
      .
    </span>
  );
};
