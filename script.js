
let currentPage = 1;

function nextPage() {
  if (currentPage >= 5) return;

  document.getElementById(`page${currentPage}`)
    .classList.remove("active");

  currentPage++;

  document.getElementById(`page${currentPage}`)
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showNote(message) {
  const display = document.getElementById("note-display");

  display.textContent = message;
  display.style.animation = "none";

  setTimeout(() => {
    display.style.animation = "appear 0.5s ease";
  }, 10);
}

function openLetter() {
  document.getElementById("letter-intro").style.display = "none";

  document.getElementById("letter-paper")
    .classList.add("show");

  document.querySelector(".restart")
    .classList.add("show");
}

function restart() {
  document.getElementById("letter-paper")
    .classList.remove("show");

  document.getElementById("letter-intro")
    .style.display = "block";

  document.querySelector(".restart")
    .classList.remove("show");

  document.getElementById(`page${currentPage}`)
    .classList.remove("active");

  currentPage = 1;

  document.getElementById("page1")
    .classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
