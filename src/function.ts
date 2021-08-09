export {};

function bmi(height: number, weight: number): number {
  return height / (weight * weight);
}

console.log(bmi(1.63, 49));

