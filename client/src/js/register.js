const form = document.querySelector(".registration-form");
form.addEventListener("submit", async (e) => {
  const username = document.querySelector("#username");
  const password = document.querySelector("#password");
  e.preventDefault();
  let dto = {
    username: username.value,
    password: password.value,
  };
  const res = await fetch("http://localhost:3000/api/auth/regestration", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(dto),
  });
  const data = res.json();
  data.then((data) => {
    alert(data.message);
    window.location = "/client/src/pages/auth-login.html";
  });
});
