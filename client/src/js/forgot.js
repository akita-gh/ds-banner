const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');

forgotPasswordLink.addEventListener('click', () => {
  forgotPasswordModal.style.display = 'block';
});

closeForgotPasswordModal.addEventListener('click', () => {
  forgotPasswordModal.style.display = 'none';
});
