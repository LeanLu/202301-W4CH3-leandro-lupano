import { Character } from './Character';
import { Fighter } from './Fighter.js';

export class Squire extends Character {
  constructor(
    characterName: string,
    family: string,
    age: number,
    public characterServed: Fighter,
    public gradeOfServe: number
  ) {
    super(characterName, family, age);
  }

  greeting() {
    return `Soy un loser`;
  }
}
