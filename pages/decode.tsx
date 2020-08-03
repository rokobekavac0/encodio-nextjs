import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "../components/Header";
import { SwithPage } from "../components/SwitchPage";
import { Faq } from "../components/Faq";
import { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import { beautifyError } from "../utils/errorBeautify";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";
import Highlighter from "react-highlight-words";
import { NullablePartial } from "../utils/partialNull";

interface IDecodedData {
  amount?: number | null;
  isEncryped?: number | null;
  encodedWords?: Array<string> | null;
  error?: string | null;
}

const DecodePage = () => {
  const [decodedData, setdecodedData] = useState<IDecodedData | null>();
  const [input, setInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const inputref = useRef<HTMLTextAreaElement>(null);
  const [debouncedInputValue] = useDebounce(inputref.current?.value, 500);
  const [debouncedLoading] = useDebounce(inputref.current?.value, 500, { leading: true });
  useEffect(() => {
    setIsSearching(true);
    if (inputref.current?.value === "") {
      setIsSearching(false);
    }
  }, [debouncedLoading]);

  useEffect(() => {
    setIsSearching(true);
    if (debouncedInputValue === "") {
      setdecodedData(null);
      setIsSearching(false);
    }
    debouncedInputValue &&
      (async () => {
        try {
          const req = await fetch(`${window.location.origin}/api/decode`, {
            body: JSON.stringify({ data: debouncedInputValue }),
            method: "POST",
          });
          const dat = await req.json();
          if (dat.error) throw new Error(dat.error);
          setError(false);
          console.log(dat);
          setdecodedData(dat);
        } catch (error) {
          setdecodedData(null);
          setError(true);
        } finally {
          setIsSearching(false);
        }
      })();
  }, [debouncedInputValue]);

  // for preventing spam clicking download button

  return (
    <div className={css(tw`bg-black`)}>
      <div className={css(tw` max-w-screen-xl text-white pt-8 md:pt-10 md:px-6 px-8 flex flex-col ml-auto mr-auto`)}>
        <div className={css(tw``)}>
          <div className={css(tw``)}>
            <Header />
          </div>
        </div>

        <div className={css(tw`text-white font-light pt-4 text-right`)}>
          <SwithPage page={"encode"} />
        </div>

        <div>
          <div className={css(tw`w-full pt-6 `)}>
            <div className={css(tw`md:grid grid-cols-2 col-gap-9`)}>
              <div>
                <label htmlFor="inputD" className={css(tw`text-white  font-bold tracking-normal`)}>
                  Input text
                </label>

                <textarea
                  id="inputD"
                  value={input}
                  spellCheck={false}
                  ref={inputref}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  placeholder={"Type or paste some text"}
                  className={css(tw`shadow resize-none appearance-none tracking-normal mt-2 leading-5 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 rounded-none`)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="encoded" className={css(tw`text-white font-bold tracking-normal`)}>
                  Output:{" "}
                </label>
                <div className={css(tw`relative`)}>
                  <Spinner show={isSearching} className={css(tw`absolute   top-4 text-green-500 right-0`)} />
                  <div className={css(tw`font-mono h-32 md:h-40 overflow-y-scroll overflow-x-hidden py-2 px-3 mb-3 border-gray-100 mt-2 border `)}>
                    <Highlighter
                      className={css(tw``)}
                      searchWords={decodedData?.encodedWords ?? []}
                      highlightStyle={{ background: "linear-gradient(45deg, #f7ff0066 0%, #db36a466 100%)", color: "white" }}
                      autoEscape={true}
                      textToHighlight={input}
                    />
                  </div>
                  {/* ,<pre>{JSON.stringify(decodedData, null, 2)}</pre> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
      <Footer />
    </div>
  );
};

export default DecodePage;
