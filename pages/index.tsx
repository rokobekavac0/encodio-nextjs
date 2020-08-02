import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "../components/Header";
import { SwithPage } from "../components/SwitchPage";
import { Button } from "../components/Button";
import { MdContentCopy, MdFileDownload } from "react-icons/md";
import { Tooltip } from "../components/Tooltip";
import CopyToClipboard from 'react-copy-to-clipboard';
import { Faq } from "../components/Faq";
import { SyntheticEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Index = () => {


  const [debouncedDownaloadButtonCallback] = useDebouncedCallback(value => {

    downloadTxtFile("d", "test.txt");
  }, 1000);

  const downloadTxtFile = (str: string, name: string) => {
    const element = document.createElement("a");
    const file = new Blob([str], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = name;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  return (
    <div className={css(tw`bg-black`)}>
      <div
        className={css(
          tw` max-w-screen-xl text-white pt-8 md:pt-10 md:px-6 px-8 flex flex-col ml-auto mr-auto`
        )}
      >
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
                <label htmlFor="inputD" className={css(tw`text-white  font-bold tracking-normal`)}>Input text</label>
                <textarea
                  id="inputD"
                  placeholder={"Type or paste some text"}
                  className={css(
                    tw`shadow resize-none appearance-none tracking-normal mt-2 leading-5 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 rounded-none`
                  )}
                ></textarea>
              </div>
              <div>
                <label htmlFor="encoded" className={css(tw`text-white font-bold tracking-normal`)}>Output: </label>
                <textarea
                  id="encoded"
                  readOnly
                  placeholder={"Here you should see encoded text..."}
                  className={css(
                    tw`shadow appearance-none resize-none placeholder-gray-400 mt-2 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 leading-tight focus:outline-none focus:shadow-none`
                  )}
                ></textarea>
              </div>
            </div>
            <div
              className={css(tw`inline-flex flex-col  text-white sm:flex-row`, {
                float: "right",
              })}
            >

              <div className={css(tw`sm:mr-2 mr-0 mb-2`)}>
                <Tooltip className={css(tw`bg-white w-24 text-sm text-black font-medium`)} text={"✔ Copied!"} durationAfterLastClick={1500}>
                  <Button
                    text={"Copy to clipboard"}
                    className={css(
                      tw`bg-primary hover:bg-opacity-75 `
                    )}
                    onClick={() => { }}
                    icon={<MdContentCopy />}
                  />
                </Tooltip>

              </div>
              <div>
                <Tooltip className={css(tw`bg-white w-40 text-black text-sm font-medium`)} text={"📁 Started download!"} durationAfterLastClick={1300}>
                  <Button
                    text={"Downaload as .txt"}
                    className={css(
                      tw`bg-secundary hover:bg-opacity-75`
                    )}
                    onClick={debouncedDownaloadButtonCallback as any}
                    icon={<MdFileDownload />}
                  />
                </Tooltip>

              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Index;
