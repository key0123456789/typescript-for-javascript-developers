export {};

class Magician {}
class Soryo {}

// 複数のインターフェースを継承することはできる。
class Taro extends Magician {}

interface Kenja {
  magic(): void;
}

interface knight {
  attack(): void;
}

class Jiro implements Kenja, knight {
  magic(): void {
    console.log('magic')
  }
  attack(): void {
    console.log('attack')
  }
}

const jiro = new Jiro();
jiro.magic();
jiro.attack();