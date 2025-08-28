document.addEventListener("DOMContentLoaded", () => {
  fetch("https://script.google.com/macros/s/AKfycbyuAjnUp5zeFI2WQInpSHhVpjKNYcYysIGgeht36lpN0e9-VDwYzKXfS6Gf1mPVajp8/exec")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("adminResults");
      container.innerHTML = "";
      data.forEach(row => {
        const div = document.createElement("div");
        div.textContent = row.user + " → " + row.q1 + " / " + row.q2;
        container.appendChild(div);
      });
    })
    .catch(err => {
      document.getElementById("adminResults").innerText = "Erreur de chargement : " + err;
    });
});