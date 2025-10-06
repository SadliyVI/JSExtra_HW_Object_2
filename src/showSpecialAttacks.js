import getSpecialAttacks from './getSpecialAttacks.js';

// Отображает доступные спецатаки персонажа на странице

export default function showSpecialAttacks(character) {
  const attacksPanel = document.getElementById('attacks-panel');
  if (!attacksPanel) {
    return;
  }

  const attacks = getSpecialAttacks(character);
  attacksPanel.innerHTML = '';

  attacks.forEach(({ id, name, icon, description }) => {
    const btn = document.createElement('div');
    btn.className = 'attack-button';
    btn.dataset.id = id;
    btn.innerHTML = `
      <img src="${icon}" alt="${name}" />
      <div>
        <strong>${name}</strong><br/>
        <small>${description}</small>
      </div>
    `;
    attacksPanel.appendChild(btn);
  });
}
