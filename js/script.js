// Image hover swap
document.querySelectorAll('.mega-card img').forEach((img) => {
  img.addEventListener('mouseenter', () => {
    img.dataset.original = img.src;
    img.src = img.dataset.hover;
  });
  img.addEventListener('mouseleave', () => {
    img.src = img.dataset.original;
  });
});


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// CTA buttons scroll to contact section
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    contact.scrollIntoView({ behavior: "smooth" });
  });
});

// Navbar icon placeholder actions
const bindClick = (selector, message) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.addEventListener("click", (e) => {
    e.preventDefault();
    alert(message);
  });
};

bindClick("#search-icon", "Search feature not implemented yet.");
bindClick("#settings-icon", "Settings page coming soon.");
bindClick("#profile-icon", "Log in / profile feature missing.");

// sigup form submission listerner
const signupForm = document.getElementById("signup-form");

if (signupForm)
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    console.log("Signup attempt:", { email });

    try {
     
      const response = await fetch("http://localhost:5000/user/register", {
         credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log("Response:", data);
      alert(data.message);
      if (response.ok) {
        window.location.href = "../html/sales.html";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
// login form submission listener
const loginForm = document.getElementById("login-form");
if (loginForm)
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    console.log("Login attempt:", { email });

    try {
      const response = await fetch("http://localhost:5000/user/login", {
         credentials: "include",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log("Response:", data);
      alert(data.message);
      if (response.ok) {
        window.location.href = "../html/sales.html";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
