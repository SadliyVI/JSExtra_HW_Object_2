import orderByProps from './orderByProps.js';
import showSpecialAttacks from './showSpecialAttacks.js';

import icon_1 from './img/icon_1.svg';
import icon_2 from './img/icon_2.svg';

const hero = {
  name: 'Лучник',
  type: 'Bowerman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: icon_1,
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: icon_2
    }
  ]
};

const sorted = orderByProps(hero, ['name', 'level']);

const container = document.getElementById('app');
if (container) {
  container.innerHTML = `
    <h1>Результат сортировки</h1>
    <pre>${JSON.stringify(sorted, null, 2)}</pre>
    <p>Всего свойств: ${sorted.length}</p>
  `;
}

showSpecialAttacks(hero);
