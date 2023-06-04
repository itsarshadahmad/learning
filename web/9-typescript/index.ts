// Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

let unkownType: unknown; // Alternative to any | can be assign to any value

// Alternative to void | void returns undefined & never returns nothing
let printName: (name: string) => never; // represents the type of values that never occur
let printName1: (name: string) => void;

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];
// Tuple Array
let employees: [number, string][];

employees = [
	[1, "Brad"],
	[2, "John"],
	[3, "Jill"],
];

// Union
let pid: string | number;
pid = "22";

// Enum
enum Direction1 {
	Up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

// Objects
type User = {
	id: number;
	name: string;
};

// interface and type both can extend each other
// extending type
type X = User & {};

const user: User = {
	id: 1,
	name: "John",
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
	return x + y;
}

// Void
function log(message: string | number): void {
	console.log(message);
}

// Interfaces
interface UserInterface {
	readonly id: number;
	name: string;
	age?: number; // (?) is used for optional
}

const user1: UserInterface = {
	id: 1,
	name: "John",
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
	readonly id: number; // readonly property cannot re-assigned
	name: string;
	register(): string;
}

// Classes
class Person implements PersonInterface {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register() {
		return `${this.name} is now registered`;
	}
}

const brad = new Person(1, "Brad Traversy");
const mike = new Person(2, "Mike Jordan");

// Subclasses
class Employee extends Person {
	position: string;

	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
	return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["brad", "John", "Jill"]);

// strArray.push(1); // Throws error

// Access Modifiers
class Human {
	private name: String;
	protected age: Number;
	public gender: String;

	constructor(name: String, age: Number, gender: String) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	getName(): String {
		return this.name;
	}

	getAge(): Number {
		return this.age;
	}

	show(): void {
		console.log(`${this.name} is ${this.age} years old.`);
	}
}

const p1 = new Human("Joe", 12, "male");

// p1.show();

for (let i = 1; i <= 10; i++) {
	console.log(`10 * ${i} = ${12 * i}`);
}

interface Animal {
	breathe(): void;
	eat(): void;
}

class Cat implements Animal {
	breathe(): void {
		console.log("Cat breathe air");
	}
	eat(): void {
		console.log("Cat eats food");
	}
}

const c1 = new Cat();
c1.breathe();
c1.eat();
