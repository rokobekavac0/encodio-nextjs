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
import { beautifyError } from "../utils/errorBeautify";
import { Footer } from "../components/Footer";
import { Spinner } from "../components/Spinner";
import { Textarea } from "../components/Textarea";

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
      setEncodedData("");
      setIsSearching(false);
    }
    debouncedInputValue &&
      (async () => {
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
    downloadTxtFile(encodedData as string, "encoded.txt");
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
                <Textarea
                  id={"inputD"}
                  labelText={"Input text"}
                  placeHolder={"Type or paste text"}
                  showSpinner={false}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  inputRef={inputref}
                ></Textarea>
              </div>
              <div>
                <Textarea
                  id={"encoded"}
                  hasError={error ?? false}
                  labelText={"Output"}
                  isReadOnly={true}
                  hasSpinner={true}
                  showSpinner={isSearching}
                  value={encodedData as string}
                  placeHolder={"Here you should see encoded text"}
                ></Textarea>
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
