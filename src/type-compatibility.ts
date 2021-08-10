export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

// 互換性がある。
fooCompatible = barCompatible;

// anyにstringのデータを渡すと、string型になる。
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// 互換性がない。
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1989 = 1989;

// 数値全体を許容するnumberに対して、より狭い数値literalを代入することはできる。
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number) {}
}

// 代入される側のnameがないが！？ となる。
// let me: Animal;
// me = new Person(18);

let me: Animal;
me = new Person(22, 'Tzuyu');
