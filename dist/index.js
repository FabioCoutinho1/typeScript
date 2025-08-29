let age = 5;
const name = "fabio";
const isValId = true;
let idk = 5;
idk = 5;
idk = "fabio";
const ids = [1, 2, 3, 4];
const booleans = [true, false, true];
const names = ["fabio", "pedro", "julio"];
//tupula
const person = [1, "jane"];
//lista de tupulas
const people = [
    [1, "a"],
    [2, "b"],
    [3, "c"],
];
//Intersections --> quando a gente quer qeu uma variavel tenha um tipo ou outro
const productId = false;
//Enum --> um valor que sempre vai ser atribuidoi a outro valor
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(direction);
console.log(name);
console.log(age);
export {};
//# sourceMappingURL=index.js.map