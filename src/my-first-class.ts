export {};

class Person {
  name: string;
  age: number;

  // constructor宣言の中に戻り値のtypeはかけない。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }

}
let taro = new Person('Taro', 30);
console.log(taro.profile());
// let hanako = new Person();
