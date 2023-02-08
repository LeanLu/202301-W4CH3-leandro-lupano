import { Character } from './Character';

export class Counselor extends Character {
  constructor(
    characterName: string,
    family: string,
    age: number,
    public characterAdvised: Character
  ) {
    super(characterName, family, age);
  }

  greeting() {
    return `No sé por qué, pero creo que voy a morir pronto`;
  }
}
