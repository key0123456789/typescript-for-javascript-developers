export {};

// let profile: { name: string; age: number; } = {
//   name: 'Sana',
//   age: null
// }
// ts.config.jsonで、strictNullChecksを外すと、nullを許容するようになるが…　globalに影響を及ぼすのでtrueのままのほうが良い。

// union型を作れば良い。nullか、numberを受け入れるようにする。
let profile: { name: string; age: number | null } = {
  name: 'Sana',
  age: null
}
