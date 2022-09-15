import { Character, Human } from "./1-issue";

const characters: Character[] = [
  { name: "Ford", age: 200 },
  { name: "Arthur", age: 62 },
  { identifier: "Marvin", depression: true },
];

// `isHuman` is a so called 'type predicate function' or 'type guard'.
// its return type is boolean.
// when the return value is `true`, typescript knows that the input value is of the type.
//
// we use the typescript `in` operator to check for a property on `character`
function isHuman(character: Character): character is Human {
  return "name" in character;
}

// type of onlyHumans is inferred as { name: string }[]
const onlyHumans = characters.filter(isHuman);

const firstName = onlyHumans[0].name; // it is typed as `Human`

export {};
