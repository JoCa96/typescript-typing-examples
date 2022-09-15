export interface Robot {
  identifier: string;
  depression: boolean;
}

export interface Human {
  name: string;
  age: number;
  robot: Robot;
}

export type Character = Robot | Human;

const characters: Character[] = [
  { name: "Ford", age: 200 } as any,
  { name: "Brian", age: 62 } as any,
  { identifier: "Marvin", depression: true },
];

// error: Property 'name' does not exist on type 'Character'.ts(2339)
// 
const onlyHumans = characters.filter((c) => c.name !== undefined);

export {};
