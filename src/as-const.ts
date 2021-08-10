export {};

let name = 'A';
name = 'Sana';

// 変数を初期化するには。as const をつけると、上書きできなくなる。定数になる。
let nickname = 'Sana' as const;

// objectでも再代入できなくなる。readonly になるのと同義。どれだけネストしてても、readonlyになるので便利。
let profile = {
  name: 'Mina',
  height: 163
} as const;
