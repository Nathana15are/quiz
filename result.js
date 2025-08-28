document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const user = params.get("user") || "Anonyme";
  document.getElementById("results").innerText = user + ", tes résultats seront bientôt affichés !";
});