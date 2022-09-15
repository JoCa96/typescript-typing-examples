export interface Robot {
  identifier: string;
  depression: boolean;
}

export interface Human {
  name: string;
  age: number;
}

export type Character = Robot | Human;

// we have a list of objects with different types
const characters: Character[] = [
  { name: "Ford", age: 200 },
  { name: "Brian", age: 62 },
  { identifier: "Marvin", depression: true },
];

// error: Property 'name' does not exist on type 'Character'.ts(2339)
const onlyHumans = characters.filter((c) => c.name !== undefined);

export {};
