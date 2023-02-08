import { Character } from './Character';

export class Fighter extends Character {
  constructor(
    characterName: string,
    family: string,
    age: number,

    public weapon: string,
    public skill: number
  ) {
    super(characterName, family, age);
    this.weapon = weapon;
    this.skill = skill;
  }

  greeting() {
    return `Primero pego y luego pregunto`;
  }
}
