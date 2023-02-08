import { Character } from './Character';

describe('Given the class Character', () => {
  describe('When we create a Character ', () => {
    test('Then if the properties are ("Leon", "King", 34), it should create an object with 5 properties', () => {
      const newCharacter = new Character('Leon', 'King', 34);

      expect(newCharacter).toHaveProperty('characterName');
      expect(newCharacter).toHaveProperty('family');
      expect(newCharacter).toHaveProperty('age');
      expect(newCharacter).toHaveProperty('status');
      expect(newCharacter).toHaveProperty('serie');
    });

    test('Then the status have to be true, and after kill should be false', () => {
      const newCharacter = new Character('Leon', 'King', 34);
      expect(newCharacter.status).toBe(true);
      newCharacter.kill();
      expect(newCharacter.status).toBe(false);
    });
  });
});
