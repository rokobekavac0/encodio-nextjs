import { css } from "@emotion/css";
import tw from "@tailwindcssinjs/macro";
import { Header } from "../components/Header";
import { SwithPage } from "../components/SwitchPage";
import { Button } from "../components/Button";
import { MdContentCopy } from "react-icons/md";

const Index = () => {
  return (
    <div className={css(tw` h-screen bg-black`)}>
      <div className={css(tw` max-w-screen-xl flex flex-col ml-auto mr-auto`)}>
        <div className={css(tw`pt-6 pl-6 md:pt-8 md:pl-8`)}>
          <div className={css(tw``)}>
            <Header />
          </div>
        </div>

        <div
          className={css(
            tw`text-white font-light pt-8 text-right px-6 md:pt-8 md:px-8`
          )}
        >
          <SwithPage page={"decode"} />
        </div>

        <div>
          <div className={css(tw`w-full pt-4 px-6 md:pt-8 md:px-8 `)}>
            <div className={css(tw`md:grid grid-cols-2 col-gap-9`)}>
              <div>
                <div className={css(tw` mb-2 font-bold tracking-normal `)}>
                  <label className={css(tw`text-white`)}>Input text</label>
                </div>
                <textarea
                  placeholder={"Type or paste some text"}
                  className={css(
                    tw`shadow appearance-none tracking-normal leading-5 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 focus:outline-none focus:shadow-none`
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
                    tw`shadow appearance-none placeholder-gray-400 h-32 md:h-40 border bg-black w-full py-2 px-3 text-white font-mono mb-3 leading-tight focus:outline-none focus:shadow-none `
                  )}
                ></textarea>
              </div>
            </div>
            <div className={css(tw`flex justify-end`)}>
              <Button
                text={"Copy to clipboard"}
                className={css(tw`bg-red-500 hover:bg-red-400 text-white`)}
                onClick={() => {}}
                icon={<MdContentCopy />}
              />

              <Button
                text={"Copy to clipboard"}
                className={css(tw`bg-red-500  hover:bg-red-400 text-white`)}
                onClick={() => {}}
                icon={<MdContentCopy />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
