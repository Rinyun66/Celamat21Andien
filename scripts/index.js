// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "21+" && password === "ahh") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang ANDIEN SAYANG 💙",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "yahh error",
      title: "Login gagal oy !",
      text: "Coba lagi deh😏",
    });
  }
});


// SNOW
function createSnow() {
  const container = document.querySelector(".snow-container");

  setInterval(() => {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");

    snow.innerHTML = ["❄️","🌸","🤍"][Math.floor(Math.random()*3)];

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = Math.random() * 10 + 10 + "px";
    snow.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(snow);

    setTimeout(() => {
      snow.remove();
    }, 5000);
  }, 200);
}
createSnow();


// ENVELOPE
document.getElementById("openEnvelope").addEventListener("click", function () {
  const flap = document.querySelector(".flap");
  const envelope = document.querySelector(".envelope_container");
  const login = document.querySelector(".login_container");

  flap.style.transform = "rotateX(180deg)";

  setTimeout(() => {
    envelope.style.display = "none";
    login.classList.remove("hidden");
  }, 500);
});