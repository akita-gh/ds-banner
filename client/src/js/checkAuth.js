const redirect = () => (location.href = "/client/src/pages/auth-signin.html");
(async function () {
  const token = document.cookie.split("=")[1];
  const data = await fetch(`http://localhost:3000/api/auth/checkAuth`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
  const res = data.json();
  res.then((data) => !data.isAuth && redirect());
})();