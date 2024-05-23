const truncateElement = document.querySelector('.truncate');
const readMoreButton = document.querySelector('.read-more');

readMoreButton.addEventListener('click', () => {
  if (truncateElement.classList.contains('full-text')) {
    truncateElement.classList.remove('full-text');
    readMoreButton.textContent = 'Read More...';
  } else {
    truncateElement.classList.add('full-text');
    readMoreButton.textContent = 'Show Less';
  }
});
