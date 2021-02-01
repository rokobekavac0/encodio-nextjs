import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "@/components/Header";
import { SwithPage } from "@/components/SwitchPage";
import { Faq } from "@/components/Faq";
import { useState, useRef } from "react";
import { Footer } from "@/components/Footer";
import { Spinner } from "@/components/Spinner";
import Highlighter from "react-highlight-words";
import { Textarea } from "@/components/Textarea";
import { Stats } from "@/components/Stats";
import { Layout } from "@/components/Layout";
import { useDecode } from "@/hooks/useDecode";

const DecodePage = () => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState<string>("");
  const { decodedData, error, isSearching } = useDecode({ inputRef: inputRef });

  return (
    <Layout>
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
                  <Textarea id={"inputD"} labelText={"Input text"} placeHolder={"Type or paste text"} showSpinner={false} value={input} onChange={(e) => setInput(e.target.value)} inputRef={inputRef}></Textarea>
                </div>
                <div>
                  <label htmlFor="encoded" className={css(tw`text-white font-bold tracking-normal`)}>
                    Output:{" "}
                  </label>
                  <div className={css(tw`relative`)}>
                    <Spinner show={isSearching} className={css(tw`absolute top-2 text-secundaryFooter right-0 sm:mr-5 mr-5`)} />
                    <div className={css(tw`font-mono h-32 pr-10 font-bold sm:text-base text-sm md:h-40 overflow-y-scroll break-words py-2 pl-3 mb-3 border-gray-100 mt-2 border `)}>
                      <Highlighter
                        className={css(!input ? tw`text-gray-400` : "")}
                        searchWords={decodedData?.encodedWords ?? []}
                        highlightStyle={{ background: "linear-gradient(45deg, #f7ff0088 0%, #db36a488 100%)", color: "white" }}
                        autoEscape={true}
                        textToHighlight={input ? input : "Decoded output"}
                      />
                    </div>
                  </div>
                  <div className={css(tw`bg-white text-black rounded-sm `)}>
                    <Stats data={decodedData!}></Stats>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Faq />
        </div>
        <Footer />
      </div>
    </Layout>
  );
};

export default DecodePage;
