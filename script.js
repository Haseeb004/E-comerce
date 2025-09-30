// Handle login form submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Redirect to products page (no authentication logic here for simplicity)
      window.location.href = "products.html";
    });
  }
});
