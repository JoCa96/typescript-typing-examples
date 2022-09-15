/**
 * Custom Type Guard
 * =================
 *
 * Use to
 * - type unknown values (e.g. from an API)
 * - ensure correct type after filtering
 * - determine exact type from a type union
 *
 * Sources:
 * - https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * - https://www.typescriptlang.org/play?#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
 * - https://dev.to/dino_kaca/advanced-typescript-tips-tricks-31ib
 */

import { Character, Human } from "./1-issue";

const characters: Character[] = [
  { name: "Ford", age: 200 } as any,
  { name: "Brian", age: 62 } as any,
  { identifier: "Marvin", depression: true },
];

// `isHuman` is a so called 'type predicate function' or 'type guard'.
// its return type is boolean.
// when the return value is `true`, typescript knows that the input value is of the type.
// we use the typescript `in` operator to check for a property on `character`
function isHuman(character: Character): character is Human {
  return "name" in character;
}

// type of onlyHumans is inferred as { name: string }[]
const onlyHumans = characters.filter(isHuman);

const firstName = onlyHumans[0].name; // it is typed as `Human`

export {};