export {};

// function double(value: number): number {
//   return value * 2;
// }
// console.log(double(100));

// function double(value: string): string {
//   return value + value;
// }
// console.log(double('go'));

// ２つの同じ名前の関数。numberか、stringか、で違う。シグネチャー関数を用意する。DBのスキーマのようなもの。
function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  if(typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
console.log(double('aaaaa'));