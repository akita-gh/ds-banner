const username = localStorage.getItem("username");
const login = document.querySelector(".login");
const logoutButton = document.getElementById("logoutButton");

if (username) {
  // Если есть имя пользователя в localStorage, отображаем его и кнопку "Выйти"
  login.innerHTML = `<h3>${username}</h3>`;
  login.style.cssText = 'color:#fff';
  logoutButton.style.display = 'inline';
} else {
  // Если нет имени пользователя, скрываем кнопку "Выйти"
  logoutButton.style.display = 'none';
}

// Обработчик для кнопки "Выйти"
logoutButton.addEventListener('click', () => {
  // Удаляем данные о пользователе из localStorage
  localStorage.removeItem("username");
  // Обновляем страницу (или делайте другие действия после выхода)
  window.location.reload();
});