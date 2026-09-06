const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
const textTimers = new WeakMap();

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index], iconButton)
  );
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', () =>
    toggleIsLiked(likeHeartArray[index], button, iconButtonArray[index])
  );
});

function toggleIsLiked(heart, button, iconButton) {
  const isLiked = heart.classList.toggle('is-liked');
  button.setAttribute('aria-pressed', String(isLiked));
  iconButton.setAttribute('aria-pressed', String(isLiked));
  clearTimeout(textTimers.get(button));
  textTimers.set(button, setTimeout(() => {
    button.querySelector('.button__text').textContent = isLiked ? 'Unlike' : 'Like';
  }, 500));
}
