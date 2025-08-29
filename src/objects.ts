//Type --> basicamente um objeto, e a gente pode definir quais propiedades esse objeto vai ter

type Orders = {
  productId: string;
  price: number;
};
type User = {
  fistName: string;
  age: number;
  email?: string;
  password?: string;
  orders: Orders[];
  register(): string;

  //o ? deixa opcional
};

const user: User = {
  fistName: "Fabio",
  age: 22,
  orders: [
    { productId: "1", price: 200 },
    { productId: "2", price: 300 },
  ],
  register() {
    return "2";
  },
};

user.password;

const print = (message: string) => {};
// Com propiedades opcionais, elas são diferentes de seu tipo, ou ela e o propio tipo ou ela e indefinida
print(user.password!);
//como o ! a gente afirma que o elemento existe

//Unions

type Author = {
  books: string[];
};
//A gente pode basicamente unir dois types
const author: Author & User = {
  age: 22,
  books: ["1"],
  email: "user@",
  fistName: "Fabio",
  orders: [],
  register() {
    return "a";
  },
};

//Interfaces
interface UserInterface {
  readonly fistName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "fabio@gmail.com",
  fistName: "Fabio",
  login() {
    return "a";
  },
};

//aqui nas interfaces a gente tem aguns super poderes
//como o readonly --> o valor do elemento fica imutavel pois ele fica somente como leitura
//sao tipos de coias que nao podemos usar com o type
//tambem podemos usar os unios assim como no type

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  fistName: "Fabio",
  books: ["1"],
  login() {
    return "b";
  },
};

type Grade = number | string;
const grade: Grade = 1;
