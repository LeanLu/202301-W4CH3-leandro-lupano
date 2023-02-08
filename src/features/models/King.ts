import { Character } from './Character';

export class King extends Character {
  constructor(
    characterName: string,
    family: string,
    age: number,
    public regnalYears: number
  ) {
    super(characterName, family, age);
    // NO es necesario colocar la siguiente propiedad porque no le asigno valor y está declarada como variable en el constructor:
    // this.regnalYears = regnalYears;
  }

  greeting() {
    return `Vais a morir todos`;
  }
}
