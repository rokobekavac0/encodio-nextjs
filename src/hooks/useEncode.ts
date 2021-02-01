import { useRef, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { beautifyError } from "../utils/errorBeautify";

export interface useEncodeProps {
  inputRef: React.RefObject<HTMLTextAreaElement>;
}

export interface IDecodedData {
  amount?: number | null;
  isEncryped?: number | null;
  encodedWords?: Array<string> | null;
  error?: string | null;
}

export interface useEncodeReturn {
  isSearching: boolean;
  error: boolean | null;
  encodedData: string | null | undefined;
}

export const useEncode = ({ inputRef }: useEncodeProps): useEncodeReturn => {
  const [encodedData, setEncodedData] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
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
  return {
    encodedData,
    error,
    isSearching,
  };
};
