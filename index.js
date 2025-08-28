document.getElementById("generateLinkBtn").addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();
  if(!name) {
    alert("Entre ton prénom !");
    return;
  }
  const link = window.location.origin + "/quiz.html?user=" + encodeURIComponent(name);
  alert("Partage ce lien : " + link);
});