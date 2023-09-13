const registrationForm = document.getElementById('registrationForm');
const notification = document.getElementById('notification');

registrationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const regUsername = document.getElementById('regUsername').value;
  const regPassword = document.getElementById('regPassword').value;

  try {
    const response = await fetch('http://localhost:3000/api/auth/regestration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: regUsername,
        password: regPassword,
      }),
    });

    if (response.status === 200) {
      // регистрация успешна
      const data = await response.json();
      displayNotification(data.message);
      window.location.href = '/client/index.html';
    } else if (response.status === 400) {
      // ошибка при регистрации из-за некорректных данных
      const data = await response.json();
      displayNotification(data.message);
    } else {
      // Другие ошибки
      displayNotification('Произошла ошибка при регистрации');
    }

  } catch (error) {
    console.error(error);
    displayNotification('Произошла ошибка при регистрации');
  }
});

// функция для отображения уведомлений
function displayNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 7000);
}
