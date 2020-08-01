import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "../components/Header";
import { SwithPage } from "../components/SwitchPage";
import { Button } from "../components/Button";
import { MdContentCopy, MdFileDownload } from "react-icons/md";

const Index = () => {
  return (
    <div className={css(tw` h-screen bg-black`)}>
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
                <div className={css(tw` mb-2 font-bold tracking-normal `)}>
                  <label className={css(tw`text-white`)}>Input text</label>
                </div>
                <textarea
                  placeholder={"Type or paste some text"}
                  className={css(
                    tw`shadow resize-none appearance-none tracking-normal leading-5 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 focus:outline-none focus:shadow-none`
                  )}
                ></textarea>
              </div>
              <div>
                <div className={css(tw` mb-2 font-bold tracking-normal `)}>
                  <label className={css(tw`text-white`)}>Output: </label>
                </div>
                <textarea
                  readOnly
                  placeholder={"Here you should see encoded text..."}
                  className={css(
                    tw`shadow appearance-none resize-none placeholder-gray-400 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 leading-tight focus:outline-none focus:shadow-none `
                  )}
                ></textarea>
              </div>
            </div>
            <div
              className={css(tw`inline-flex flex-col sm:flex-row`, {
                float: "right",
              })}
            >
              <div>
                <Button
                  text={"Copy to clipboard"}
                  className={css(
                    tw`bg-primary hover:bg-primary hover:bg-opacity-75 sm:mr-2 mb-2 text-white`
                  )}
                  onClick={() => {}}
                  icon={<MdContentCopy />}
                />
              </div>
              <div>
                <Button
                  text={"Downaload as .txt"}
                  className={css(
                    tw`bg-secundary  hover:bg-secundary hover:bg-opacity-75 text-white`
                  )}
                  onClick={() => {}}
                  icon={<MdFileDownload />}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={css(
            tw`font-extrabold tracking-tight text-2xl md:pt-4 pt-6`
          )}
        >
          <h1>But, how it works?</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
