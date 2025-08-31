//podempos passar tipos como parametros, deixado a tipagem mais dinamica

const returValue = <T>(value: T): T => value;

const message = returValue<string>("Hello World");
const count = returValue<number>(5);

function getFirstValueFromArray<type>(array: type[]) {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["a", "b"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([1, 2, 3]);

//Promises
const returnPromise = async (): Promise<string> => {
  return "5";
};

//Classes
class GenericNumber<T> {
  zeroValue: T;
  sum: (x: T, y: T) => any;

  constructor(zeroValue: T, sum: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.sum = sum;
  }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
  return x + y;
});
