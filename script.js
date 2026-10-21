
"use strict";

// Tahun otomatis di footer
document.getElementById("year").textContent =
  new Date().getFullYear();

// Pesan untuk setiap anggota
const messages = {
  Wawa: "Keep dreaming, Wawa. Your story is still blooming! 🌷",
  Kia: "Keep being sweet and shining, Kia! 🎀",
  Widi: "Never stop spreading your sunshine, Widi! ☀️",
  Dinda: "You make this little world more lovely, Dinda! 🌸"
};

// Tombol identitas
document.querySelectorAll(".detail-button").forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;

    document.getElementById("surprise").textContent =
      messages[name];

    document.getElementById("story").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Pesan kejutan berganti setiap kali diklik
const surprises = [
  "You are all kinds of lovely. ♡",
  "Small moments, beautiful memories. 🌸",
  "Four girls, countless little stories. ✨",
  "May your days always bloom with happiness. 🎀"
];

let surpriseIndex = 0;

document.getElementById("surpriseButton")
  .addEventListener("click", () => {
    document.getElementById("surprise").textContent =
      surprises[surpriseIndex];

    surpriseIndex = (surpriseIndex + 1) % surprises.length;

    createSparkles(18);
  });

// Membuat efek bintang
function createSparkles(amount) {
  const symbols = ["✦", "✧", "♡", "✿"];

  for (let i = 0; i < amount; i++) {
    const star = document.createElement("span");

    star.className = "sparkle";
    star.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = (55 + Math.random() * 35) + "vh";
    star.style.fontSize = (10 + Math.random() * 15) + "px";
    star.style.animationDelay = Math.random() * 0.8 + "s";

    document.body.appendChild(star);

    star.addEventListener("animationend", () => {
      star.remove();
    });
  }
}

// Kilau kecil muncul sesekali
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (!reducedMotion) {
  setInterval(() => {
    if (document.hidden) return;

    const star = document.createElement("span");

    star.className = "sparkle";
    star.textContent = Math.random() > 0.5 ? "✧" : "♡";
    star.style.left = Math.random() * 95 + "vw";
    star.style.top = (65 + Math.random() * 25) + "vh";
    star.style.fontSize = "13px";

    document.body.appendChild(star);

    star.addEventListener("animationend", () => {
      star.remove();
    });
  }, 1800);
}
