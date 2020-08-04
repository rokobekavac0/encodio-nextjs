import { isLowerCase, isUpperCase, LETTERS_CAP, LETTERS_SML } from "./api_utils";
import { ExpandSelf } from "./arrExpandSelf";

function valdateEncode(string: string) {
  let isAny = false;
  for (let x in LETTERS_CAP) {
    if (string.indexOf(x) > -1) {
      isAny = true;
    }
  }
  for (let x in LETTERS_SML) {
    if (string.indexOf(x) > -1) {
      isAny = true;
    }
  }
  if (isAny == false) {
    throw "no letters matching";
  }
}

export interface IEncodeStringInput {
  text: string;
  numCodeI: Array<number>;
}

export interface IEncodeStringRet {
  encodedStr: string;
}

export function encodeString({ text, numCodeI }: IEncodeStringInput): IEncodeStringRet {
  let matchingChars = 1;
  let lastEncoded = 0;

  let numCode = ExpandSelf<number>(numCodeI, 6);

  let returnVal = "";

  valdateEncode(text);

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (isLowerCase(char)) {
      if (char in LETTERS_SML) {
        if (numCode[lastEncoded] == matchingChars) {
          matchingChars = 1;
          //replace
          returnVal += (LETTERS_SML as any)[char];
          lastEncoded += 1;
        } else {
          returnVal += char;
          matchingChars += 1;
        }
      } else returnVal += char;
    } else if (isUpperCase(char)) {
      if (char in LETTERS_CAP) {
        if (numCode[lastEncoded] == matchingChars) {
          matchingChars = 1;
          //replace
          returnVal += (LETTERS_CAP as any)[char];
          lastEncoded += 1;
        } else {
          returnVal += char;
          matchingChars += 1;
        }
      } else returnVal += char;
    } else {
      returnVal += char;
    }
  }
  return {
    encodedStr: returnVal,
  };
}
