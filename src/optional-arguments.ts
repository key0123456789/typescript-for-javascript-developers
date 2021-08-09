export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  let bmi = weight / (height * height);
  if(printable) {
    console.log(bmi)
  }
  return bmi;
}

bmi(1.63, 49, true);
// bmi(身長, 体重, console.logで出力するかどうか)
