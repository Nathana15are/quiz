document.getElementById("quizForm").addEventListener("submit", e => {
  e.preventDefault();

  const params = new URLSearchParams(window.location.search);
  const user = params.get("user") || "Anonyme";

  const data = {
    user: user,
    q1: e.target.q1.value,
    q2: e.target.q2.value
  };

  fetch("https://script.google.com/macros/s/AKfycbyuAjnUp5zeFI2WQInpSHhVpjKNYcYysIGgeht36lpN0e9-VDwYzKXfS6Gf1mPVajp8/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(res => {
    alert("Réponses envoyées !");
    window.location.href = "result.html?user=" + encodeURIComponent(user);
  })
  .catch(err => {
    alert("Erreur d'envoi : " + err);
  });
});