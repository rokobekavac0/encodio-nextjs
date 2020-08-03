export const LETTERS_SML = {
  a: "а",
  o: "ο", //, 'о'],
};

export const LETTERS_CAP = {
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
