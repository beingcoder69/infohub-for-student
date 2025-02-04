document.addEventListener("DOMContentLoaded", () => {
  if (window.location.hash === "" || window.location.hash === "#") {
    window.location.hash = "#home";
  }
});
