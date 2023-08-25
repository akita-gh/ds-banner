const webDevMenuItem = document.querySelector('#webDevMenuItem');
const webDevModal = document.querySelector('#webDevModal');
const closeModalButton = document.querySelector('#close-webDevModal');

webDevMenuItem.addEventListener('click', () => {
  webDevModal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  webDevModal.style.display = 'none';
});
