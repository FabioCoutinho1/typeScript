let age: number = 5;
const name: string = "fabio";
const isValId: boolean = true;
let idk: any = 5;

idk = 5;
idk = "fabio";

const ids: number[] = [1, 2, 3, 4];
const booleans: boolean[] = [true, false, true];
const names: string[] = ["fabio", "pedro", "julio"];

//tupula

const person: [number, string] = [1, "jane"];

//lista de tupulas

const people: [number, string][] = [
  [1, "a"],
  [2, "b"],
  [3, "c"],
];

//Intersections --> quando a gente quer qeu uma variavel tenha um tipo ou outro

const productId: string | number | boolean = false;

//Enum --> um valor que sempre vai ser atribuidoi a outro valor

enum Direction {
  up = 1,
  down = 2,
  left = "Esquerda",
}

const direction = Direction.left;

//Type Assertions --> quando queremos mudar o tipo de uma variavel --> tratar uma varivel
//de um tipo, como um tipo diferente

const productName: any = "Bone";

// let itemId = productName as string
let itemId = <string>productName;

console.log(direction);
console.log(name);
console.log(age);
