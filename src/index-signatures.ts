export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
// ↑ interfaceに出す。
// let profile: { [index: string]: string | number } = {};
// 動的に様々なデータを突っ込みたい。型アノテーションのほうにいちいち書くの面倒。index signatureをつかう。

let profile: Profile = { name: "momo", underTwenty: false };

profile.name = 'Sana';
// profile.age = 22; // これがしたい。

// How to write index signatures
// { [index: typeForIndex]:typeForValue }

profile.age = 22;
profile.nationality = "Japan";

