const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const regUsername = document.getElementById('regUsername').value;
    const regPassword = document.getElementById('regPassword').value;

    // данные на сервер для рега

    displayNotification(`Регистрация успешна: ${regUsername}`);
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const loginUsername = document.getElementById('loginUsername').value;

    // данные на сервер для логина

    displayNotification(`Авторизация успешна: ${loginUsername}`);
});

// сообщения при клике на кнопку

function displayNotification(message) {
    notification.textContent = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}
