export {};

// let bmi: (height: number, weight: number) => number = (
//     height: number,
//     weight: number
// ): number => {
//   return weight / (height * height);
// }

// ↓ こう書くこともできる。
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number =>  weight / (height * height);

console.log(bmi(1.63, 49));
