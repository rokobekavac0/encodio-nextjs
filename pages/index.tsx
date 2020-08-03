import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "../components/Header";
import { SwithPage } from "../components/SwitchPage";
import { Button } from "../components/Button";
import { MdContentCopy, MdFileDownload } from "react-icons/md";
import { Tooltip } from "../components/Tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import { Faq } from "../components/Faq";
import { useState, useEffect, useRef } from "react";
import { useDebouncedCallback, useDebounce } from "use-debounce";
import { beautifyError } from "../utils/errorButify";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";

const downloadTxtFile = (str: string, name: string) => {
  const element = document.createElement("a");
  const file = new Blob([str], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = name;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};

const Index = () => {
  const [encodedData, setEncodedData] = useState<string | null>("");
  const [input, setInput] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const inputref = useRef<HTMLTextAreaElement>(null);
  const [debouncedInputValue] = useDebounce(inputref.current?.value, 500);

  useEffect(() => {
    setIsSearching(true);
    if (debouncedInputValue === "") {
      setEncodedData("");
      setIsSearching(false);
    }
    debouncedInputValue &&
      (async () => {
        setEncodedData("");
        try {
          const req = await fetch(`${window.location.origin}/api/encode`, {
            body: JSON.stringify({ data: debouncedInputValue }),
            method: "POST",
          });
          const dat = await req.json();
          if (dat.error) throw new Error(dat.error);
          setError(false);
          setEncodedData(dat.encodedStr);
        } catch (error) {
          setEncodedData(beautifyError(error.message));
          setError(true);
        } finally {
          setIsSearching(false);
        }
      })();
  }, [debouncedInputValue]);

  // for preventing spam clicking download button
  const [debouncedDownaloadButtonCallback] = useDebouncedCallback((value) => {
    downloadTxtFile("d", "test.txt");
  }, 1000);

  return (
    <div className={css(tw`bg-black`)}>
      <div className={css(tw` max-w-screen-xl text-white pt-8 md:pt-10 md:px-6 px-8 flex flex-col ml-auto mr-auto`)}>
        <div className={css(tw``)}>
          <div className={css(tw``)}>
            <Header />
          </div>
        </div>

        <div className={css(tw`text-white font-light pt-4 text-right`)}>
          <SwithPage page={"decode"} />
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
                  <Spinner show={isSearching} className={css(tw`absolute  top-4 text-green-500 right-0`)} />
                  <textarea
                    id="encoded"
                    readOnly
                    value={encodedData as string}
                    placeholder={"Here you should see encoded text..."}
                    className={css(
                      tw`shadow appearance-none resize-none placeholder-gray-400 mt-2 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 leading-tight focus:outline-none focus:shadow-none`,
                      error ? tw`text-red-700` : tw``
                    )}
                  ></textarea>
                </div>
              </div>
            </div>
            <div
              className={css(tw`inline-flex flex-col  text-white sm:flex-row`, {
                float: "right",
              })}
            >
              <div className={css(tw`sm:mr-2 mr-0 mb-2`)}>
                <Tooltip disabled={error || encodedData === ""} className={css(tw`bg-white w-24 text-sm text-black font-medium`)} text={"✔ Copied!"} durationAfterLastClick={1500}>
                  <CopyToClipboard text={encodedData as string}>
                    <Button disabled={error || encodedData === ""} text={"Copy to clipboard"} className={css(tw`bg-primary-100 hover:bg-opacity-75 `)} icon={<MdContentCopy size="1rem" />} />
                  </CopyToClipboard>
                </Tooltip>
              </div>
              <div>
                <Tooltip disabled={error || encodedData === ""} className={css(tw`bg-white w-40 text-black text-sm font-medium`)} text={"📁 Started download!"} durationAfterLastClick={1300}>
                  <Button
                    disabled={error || encodedData === ""}
                    text={"Downaload as .txt"}
                    className={css(tw`bg-secundary hover:bg-opacity-75`)}
                    onClick={debouncedDownaloadButtonCallback as any}
                    icon={<MdFileDownload size="1rem" />}
                  />
                </Tooltip>
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

export default Index;
