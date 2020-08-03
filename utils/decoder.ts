import { LETTERS_CAP, LETTERS_SML } from "./api_utils";

export function getKeyByValue(object: any, value: any) {
  return Object.keys(object).find((key) => object[key] === value);
}

export function count_similarities(arrayA: Array<any>, arrayB: Array<any>) {
  let matches = 0;
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayB.indexOf(arrayA[i]) != -1) matches++;
  }
  return matches;
}

export interface IDecodeStringRet {
  isEncryped: boolean;
  amount: number;
}

export function decodeString(
  string: string,
  numCodeI: Array<number>
): IDecodeStringRet {
  let numCode = numCodeI;

  let lastIndex = 0,
    cntInLET = 1;
  let numCodeFromText = [];
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (char in LETTERS_CAP || char in LETTERS_SML) {
      cntInLET += 1;
    } else if (
      Object.values(LETTERS_CAP).indexOf(char) > -1 ||
      Object.values(LETTERS_SML).indexOf(char) > -1
    ) {
      if (cntInLET == numCode[lastIndex]) {
        lastIndex++;
      } else {
      }
      numCodeFromText.push(cntInLET);
      cntInLET = 1;
    }
  }
  let a = count_similarities(
    numCodeFromText,
    numCode.slice(0, numCodeFromText.length)
  );

  // percentage
  let prct = a / numCodeFromText.length || 0;

  // parse ret values
  let isEncryped = prct > 0 && prct <= 1 ? true : false;

  return {
    isEncryped: isEncryped,
    amount: prct,
  };
}
