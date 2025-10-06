// __tests__/getSpecialAttacks.test.js
import getSpecialAttacks from '../src/getSpecialAttacks.js';

describe('getSpecialAttacks', () => {
  test('извлекает спец.атаки с описанием', () => {
    const character = {
      special: [
        { id: 1, name: 'Удар', icon: 'icon1.png', description: 'Мощный удар' }
      ]
    };
    expect(getSpecialAttacks(character)).toEqual([
      { id: 1, name: 'Удар', icon: 'icon1.png', description: 'Мощный удар' }
    ]);
  });

  test('устанавливает default для отсутствующего description', () => {
    const character = {
      special: [{ id: 2, name: 'Секретная атака', icon: 'icon2.png' }]
    };
    expect(getSpecialAttacks(character)).toEqual([
      {
        id: 2,
        name: 'Секретная атака',
        icon: 'icon2.png',
        description: 'Описание недоступно'
      }
    ]);
  });

  test('возвращает пустой массив, если special отсутствует', () => {
    expect(getSpecialAttacks({})).toEqual([]);
  });

  test('возвращает пустой массив, если вызвано без аргументов', () => {
    expect(getSpecialAttacks()).toEqual([]);
  });

  test('работает с несколькими атаками, частично отсутствуют description', () => {
    const character = {
      special: [
        {
          id: 3,
          name: 'Атака1',
          icon: 'icon3.png',
          description: 'Есть описание'
        },
        { id: 4, name: 'Атака2', icon: 'icon4.png' }
      ]
    };
    expect(getSpecialAttacks(character)).toEqual([
      {
        id: 3,
        name: 'Атака1',
        icon: 'icon3.png',
        description: 'Есть описание'
      },
      {
        id: 4,
        name: 'Атака2',
        icon: 'icon4.png',
        description: 'Описание недоступно'
      }
    ]);
  });
});
