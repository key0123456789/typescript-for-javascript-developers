export {};

// typeは別名をつけるもの。イコールがいる
type ObjectType = {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: "shoko",
  age: 31
};

interface ObjectInterface {
  name: string;
  age: number;
}