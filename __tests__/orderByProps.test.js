import orderByProps from '../src/orderByProps.js';

describe('orderByProps', () => {
  test('сортирует по заданному порядку и алфавиту', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
    };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);

    expect(result).toEqual([
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 }
    ]);
  });

  test('если order пуст — сортирует только по алфавиту', () => {
    const obj = { c: 3, a: 1, b: 2 };
    expect(orderByProps(obj, [])).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 3 }
    ]);
  });

  test('игнорирует несуществующие ключи', () => {
    const obj = { x: 1, y: 2 };
    const order = ['z', 'x'];
    expect(orderByProps(obj, order)).toEqual([
      { key: 'x', value: 1 },
      { key: 'y', value: 2 }
    ]);
  });

  test('работает с пустым объектом', () => {
    expect(orderByProps({}, ['a'])).toEqual([]);
  });

  test('не включает унаследованные свойства', () => {
    const proto = { z: 10 };
    const obj = Object.create(proto);
    obj.a = 1;
    obj.b = 2;
    expect(orderByProps(obj, [])).toEqual([
      { key: 'a', value: 1 },
      { key: 'b', value: 2 }
    ]);
  });

  test('возвращает [] для не объектов', () => {
    expect(orderByProps(null)).toEqual([]);
    expect(orderByProps(123)).toEqual([]);
  });

  test('если order включает все ключи — сортирует в указанном порядке', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = orderByProps(obj, ['b', 'a', 'c']);
    expect(result).toEqual([
      { key: 'b', value: 2 },
      { key: 'a', value: 1 },
      { key: 'c', value: 3 }
    ]);
  });
});
