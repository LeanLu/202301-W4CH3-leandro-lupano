export class Character {
  public status: boolean;
  public serie: string;

  constructor(
    public characterName: string,
    public family: string,
    public age: number
  ) {
    this.characterName = characterName;
    this.family = family;
    this.age = age;
    this.status = true;
    this.serie = 'Game of Thrones';
  }

  kill() {
    this.status = false;
  }
}
