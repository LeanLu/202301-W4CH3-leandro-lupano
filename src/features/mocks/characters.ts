import { Character } from "../models/Character";

export const CHARACTER: Character[] = [
  {
    status: true,
    characterName: "Joffrey",
    family: "Baratheon",
    age: 25,
    picture: "/joffrey.jpg",
  },
  {
    status: true,
    characterName: "Jaime",
    family: "Lannister",
    age: 30,
    picture: "/jaime.jpg",
  },
  {
    status: true,
    characterName: "Daenerys",
    family: "Targaryen",
    age: 28,
    picture: "/daenerys.jpg",
  },
  {
    status: true,
    characterName: "Tyrion",
    family: "Lannister",
    age: 25,
    picture: "/tyrion.jpg",
  },
  {
    status: true,
    characterName: "Bronn",
    family: "Gonzalez",
    age: 35,
    picture: "/bronn.jpg",
  },
];

// const joffrey = new King( 23, 10);
// const jaime = new Fighter('Jaime', 'Lannister', 30, 'sword', 7);
// const daenerys = new Fighter('Daenerys', 'Targaryen', 28, 'dragon', 6);
// const tyrion = new Counselor('Tyrion', 'Lannister', 35, daenerys);
// const bronn = new Squire('Bronn', 'Gonzalez', 24, jaime, 9);

// const characters: Character[] = [joffrey, jaime, daenerys, tyrion, bronn];
