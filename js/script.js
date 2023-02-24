let counter = document.getElementById("counter");
let count = parseInt(localStorage.getItem("downloads")) || 0;
counter.innerHTML = count;
localStorage.setItem("downloads", count + 1);