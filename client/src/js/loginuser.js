const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const loginUsername = document.getElementById("loginUsername").value;
  const loginPassword = document.getElementById("loginPassword").value;

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    if (response.status === 200) {
      const data = await response.json();
      // displayNotification(data.message);
      // действия после успешного входа
      document.cookie = `token=${data.token}; path=/client/index.html`;
      localStorage.setItem("username", data.username);
      window.location.href = '/client/index.html';
    } else if (response.status === 400) {
      const data = await response.json();
      displayNotification(data.message);
    } else {
      displayNotification("Произошла ошибка при входе");
    }
  } catch (error) {
    console.error(error);
    displayNotification("Произошла ошибка при входе");
  }
});

function displayNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  setTimeout(() => {
    notification.style.display = "none";
  }, 3000);
}
