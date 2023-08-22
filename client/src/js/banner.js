let arr = [
  {
    banerGif: "./src/img/1.gif",
    banerAva: "./src/img/2.gif",
    banerZip: "./src/img/1.zip",
  },
  {
    banerGif: "./src/img/1.gif",
    banerAva: "./src/img/2.gif",
    banerZip: "./src/img/1.zip",
  },
  {
    banerGif: "./src/img/1.gif",
    banerAva: "./src/img/2.gif",
    banerZip: "./src/img/1.zip",
  },
  {
    banerGif: "./src/img/1.gif",
    banerAva: "./src/img/2.gif",
    banerZip: "./src/img/1.zip",
  },
];
render(arr);
function render(arr) {
  let bc = document.querySelector(".banners-container");
  let res = "";
  arr.forEach((i) => {
    res += drowBanner(i);
  });
  bc.innerHTML = res;
  openModal();
}
function drowBanner(img) {
  let res = `
  <div class="banner-item">
    <div class="banner" id="banner">
      <img src="${img.banerGif}" alt="Banner Image" />
    </div>
    ${modalBanner(img)}
  </div>`;
  return res;
}
function modalBanner(img) {
  let res = `
  <div class="modal" id="modal">
    <div class="modal-content">
      <img src="${img.banerAva}" alt="Avatar" class="avatar" />
      <img src="${img.banerGif}" alt="Banner Image" class="banner-image" />
      <a href="${img.banerZip}" download class="download-link glow-on-hover">
        Скачать
      </a>
      <button class="close-modal" id="close-modal">
        Закрыть
      </button>
    </div>
  </div>`;
  return res;
}

function openModal() {
  const banners = document.querySelectorAll(".banner");
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close-modal");

  banners.forEach((banner, index) => {
    banner.addEventListener("click", () => {
      modals[index].style.display = "flex";

      // Добавьте обработчик событий для закрытия модального окна при клике за его пределами
      window.addEventListener("click", (event) => {
        if (event.target === modals[index]) {
          modals[index].style.display = "none";
        }
      });
    });
    closeButtons[index].addEventListener("click", () => {
      modals[index].style.display = "none";
    });
  });
}
