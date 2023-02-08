import { Character } from '../models/Character';
import { Counselor } from '../models/Counselor';
import { Fighter } from '../models/Fighter';
import { King } from '../models/King';
import { Squire } from '../models/Squire';

const joffrey = new King('Joffrey', 'Baratheon', 23, 10);
const jaime = new Fighter('Jaime', 'Lannister', 30, 'sword', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 28, 'dragon', 6);
const tyrion = new Counselor('Tyrion', 'Lannister', 35, daenerys);
const bronn = new Squire('Bronn', 'Gonzalez', 24, jaime, 9);

const characters: Character[] = [joffrey, jaime, daenerys, tyrion, bronn];
