import { Character } from './Character';
import { Counselor } from './Counselor';

describe('Given the class Counselor', () => {
  describe('When we create a Character Counselor ', () => {
    test('Then if the properties are ("Leon", "Counselor", 25, new Character), it should create an object with 4 properties', () => {
      const characterAdvised = new Character('Carlos', 'King', 30);
      const newCharacter = new Counselor('Leon', 'King', 34, characterAdvised);

      expect(newCharacter).toHaveProperty('characterName');
      expect(newCharacter).toHaveProperty('family');
      expect(newCharacter).toHaveProperty('age');
      expect(newCharacter).toHaveProperty('characterAdvised');
    });

    test('Then the status have to be true, and after kill should be false', () => {
      const characterAdvised = new Character('Carlos', 'King', 30);
      const newCharacter = new Counselor('Leon', 'King', 34, characterAdvised);
      expect(newCharacter.status).toBe(true);
      newCharacter.kill();
      expect(newCharacter.status).toBe(false);
    });

    test('Then the character should have the greeting method', () => {
      const characterAdvised = new Character('Carlos', 'King', 30);
      const newCharacter = new Counselor('Leon', 'King', 34, characterAdvised);
      const result = `No sé por qué, pero creo que voy a morir pronto`;
      expect(newCharacter.greeting()).toBe(result);
    });
  });
});
