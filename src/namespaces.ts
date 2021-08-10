export {};

namespace Japanese {
  export class Person {
    constructor(public name: string) {
    }
  }
}

namespace English {
  export class Person { // exportを書くことで外からアクセスできるようになる。
    constructor (
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person('Key');
console.log(me.name)


const michael = new English.Person('Micael', 'Joseph', 'Jackson');
console.log(michael);