import { Character } from "../2-custom-type-guard/1-issue";

function typeNarrowingWithIn(character: Character) {
  console.log(character.name);

  // with `in` we can check if a property exists on the object
  if ("name" in character) {
    // only humans have a name, so it has to be a Human
    console.log(character.name);
  }

  console.log(character.name);
}

export {};
