export function ExpandSelf<T>(arr: Array<T>, amount: number) {
  return new Array(amount * arr.length).fill(0).map((value: any, index: number, array: any[]) => arr[index % arr.length]);
}
