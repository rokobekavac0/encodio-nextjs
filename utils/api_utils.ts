interface ILETTERS_SML {
  a: string;
  o: string;
}

export const LETTERS_SML: ILETTERS_SML = {
  a: "а",
  o: "ο", //, 'о'],
};

interface ILETTERS_CAP {
  A: string;
  B: string;
  O: string;
  P: string;
}

export const LETTERS_CAP: ILETTERS_CAP = {
  A: "А",
  B: "В", //, '𐊂'],
  O: "О", //, 'Օ'],
  P: "Р",
};

export const isCharDigit = (n: any) => {
  return !!n.trim() && !isNaN(+n);
};

export const sortNumber = (a: any, b: any) => {
  return a - b;
};

export const isUpperCase = (char: any) => {
  return !!/[A-Z]/.exec(char[0]);
};

export const isLowerCase = (char: any) => {
  return !!/[a-z]/.exec(char[0]);
};

export const genNumCode = (hash: any) => {};
