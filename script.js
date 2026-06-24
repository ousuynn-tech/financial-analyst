const hardCards = document.querySelectorAll('#hardCards .skill-card');
const softCards = document.querySelectorAll('#softCards .skill-card');
const detailTitle = document.querySelector('#skillDetail h4');
const detailText = document.querySelector('#skillDetail p');

function activateCard(buttons, selectedButton) {
  buttons.forEach((card) => card.classList.toggle('selected', card === selectedButton));
  detailTitle.textContent = selectedButton.dataset.title;
  detailText.textContent = selectedButton.dataset.detail;
}

hardCards.forEach((card) => {
  card.addEventListener('click', () => activateCard(hardCards, card));
});
softCards.forEach((card) => {
  card.addEventListener('click', () => activateCard(softCards, card));
});

const cube = document.getElementById('cube');
const rollButton = document.getElementById('rollButton');
const diceNote = document.getElementById('diceNote');

const diceFacts = {
  1: 'Финансовый аналитик оценивает инвестиции так, чтобы сеть и новые услуги приносили прибыль быстрее.',
  2: 'Работа в телеком‑холдинге требует сочетания цифр и понимания, как тарифы влияют на спрос.',
  3: 'Аналитик создает отчеты, которые помогают руководству решать, куда направить бюджеты.',
  4: 'Он прогнозирует, сколько компании нужно средств для развития инфраструктуры и поддержки клиентов.',
  5: 'В ЭР-Телеком аналитик участвует в проекте оптимизации затрат и улучшении операционной эффективности.',
  6: 'Задача аналитика — переводить сложные финансовые данные в понятные советы для бизнеса.'
};

const faceTransforms = {
  1: { x: -20, y: 45 },
  2: { x: -20, y: -45 },
  3: { x: 70, y: 45 },
  4: { x: 70, y: -45 },
  5: { x: -110, y: 45 },
  6: { x: 40, y: 45 }
};

function showFact(number) {
  diceNote.querySelector('h4').textContent = `Факт №${number}`;
  diceNote.querySelector('p').textContent = diceFacts[number];
}

function rollDice() {
  const result = Math.floor(Math.random() * 6) + 1;
  const transform = faceTransforms[result];
  cube.style.setProperty('--rotateX', `${transform.x}deg`);
  cube.style.setProperty('--rotateY', `${transform.y}deg`);
  cube.classList.remove('animate');
  void cube.offsetWidth;
  cube.classList.add('animate');
  rollButton.disabled = true;
  setTimeout(() => {
    cube.style.transform = `rotateX(${transform.x}deg) rotateY(${transform.y}deg)`;
    showFact(result);
    rollButton.disabled = false;
  }, 2400);
}

rollButton.addEventListener('click', rollDice);
