interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string;
  private age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}
//mesma coisa que acima
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    return this.name;
  }
}
const person = new Person(1, "Fabio", 22);

//o private so pode ser acessado dentro da sua classe, diferente do protected
//que pode ser acessado de dentro de sua class e de suas sub classes como e o casso como o extends
//no exemplo se mostro que o this.name pode ser acessado pela class Employee que extende o Person
//mas se nao e possivel usar o this.age por que ele e privado
