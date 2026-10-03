const surpriseButton = document.querySelector('#surprise-button');
const surpriseMessage = document.querySelector('#surprise-message');

surpriseButton.addEventListener('click', () => {
  const isOpen = surpriseButton.getAttribute('aria-expanded') === 'true';
  surpriseButton.setAttribute('aria-expanded', String(!isOpen));
  surpriseMessage.hidden = isOpen;
  surpriseButton.innerHTML = isOpen
    ? '<span class="button-heart" aria-hidden="true">♡</span> Tem mais uma coisinha'
    : '<span class="button-heart" aria-hidden="true">♥</span> Guardar esse carinho';

  if (!isOpen) makeHeartConfetti();
});

function makeHeartConfetti() {
  const symbols = ['♡', '♥', '✧'];

  for (let index = 0; index < 14; index += 1) {
    const heart = document.createElement('span');
    heart.className = 'heart-particle';
    heart.textContent = symbols[index % symbols.length];
    heart.style.left = `${38 + Math.random() * 24}%`;
    heart.style.setProperty('--drift', `${Math.random() * 150 - 75}px`);
    heart.style.animationDelay = `${Math.random() * 0.55}s`;
    heart.style.fontSize = `${12 + Math.random() * 15}px`;
    document.body.append(heart);
    heart.addEventListener('animationend', () => heart.remove(), { once: true });
  }
}
