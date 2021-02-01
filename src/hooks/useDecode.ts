import { useRef, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export interface useDecodeProps {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export interface IDecodedData {
  amount?: number | null;
  isEncryped?: number | null;
  encodedWords?: Array<string> | null;
  error?: string | null;
}

export interface useDecodeReturn {
  isSearching: boolean;
  error: boolean | null;
  decodedData: IDecodedData | null | undefined;
}

export const useDecode = ({ inputRef }: useDecodeProps): useDecodeReturn => {
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [decodedData, setdecodedData] = useState<IDecodedData | null>();
  const [debouncedInputValue] = useDebounce(inputRef.current?.value, 500);
  const [debouncedLoading] = useDebounce(inputRef.current?.value, 500, { leading: true });

  useEffect(() => {
    setIsSearching(true);
    if (inputRef.current?.value === "") {
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

  return {
    decodedData,
    error,
    isSearching,
  };
};
