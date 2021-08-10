export {};

class VisaCard {
  // publicは書かなくても良い。readonlyがアクセスできることを包含しているから。
  constructor(public readonly owner: string) { }
}

let myVisaCard = new VisaCard('はむさん');
console.log(myVisaCard.owner);
