import { Character } from "../2-custom-type-guard/1-issue";

function logNameOfHuman(character: Character) {
  // error
  console.log(character.name);
}

export {};
