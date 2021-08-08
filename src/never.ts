export {};

// never return （例外が起きるから呼び元に返ってこない）
function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('エラーメッセージ')
  console.log({result})
} catch(error) {
  console.log({error});
}

let foo: void = undefined;
let bar: never = undefined; // never型には値の概念がない。error()しか入れられない。
