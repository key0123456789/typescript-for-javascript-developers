// 継承
export {};

class Animal {
  constructor(public name: string) {}

  run(): string {
    return 'I can run';
  }
}

let animal = new Animal('Mickey');
console.log(animal.run());

class Lion extends Animal {
  public speed: number;

  constructor(public name: string, speed: number) {
    super(name);
    this.speed = speed;
  }

  run(): string {
    return `${super.run()} 80km`;
  }
}

console.log(new Lion('simba', 80));