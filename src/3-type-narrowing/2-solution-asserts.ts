import { Character, Human } from "../2-custom-type-guard/1-issue";

/**
 * `asserts` return type tell the ts-compiler that after this function was successful executed,
 * that the asserted parameter is of the type asserted type.
 *
 * Function with an `asserts` return type are not allowed to actually return anything.
 * They expect you to block code execution if the assertion is not met.
 * e.g. throwing or sys.exit
 */
function assertIsHuman(character: Character): asserts character is Human {
  if (!("name" in character)) {
    throw new Error("Not a human");
  }
}

function typeNarrowingWithAsserts(character: Character) {
  console.log(character.name);
  assertIsHuman(character);
  // now tsc knows it has to be a human
  console.log(character.name);
}

export {};
