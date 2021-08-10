export {};

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// }

// -------- 上を一つにまとめたい。
// Tはnumberにも、stringにもなる。型引数と呼ばれる。Tを使うのが一般的。
const echo = <T>(arg: T): T => {
  return arg;
}

console.log(echo<number>(1000));
console.log(echo<string>('1000'));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('123').echo());
