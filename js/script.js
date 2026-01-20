// ======== Image hover swap ========
document.querySelectorAll(".mega-card img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.dataset.original = img.src;
    img.src = img.dataset.hover;
  });
  img.addEventListener("mouseleave", () => {
    img.src = img.dataset.original;
  });
});

// ======== Smooth scroll for internal links ========
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ======== CTA buttons scroll ========
document.querySelectorAll(".cta-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const contact = document.querySelector("#contact");
    if (!contact) return;
    contact.scrollIntoView({ behavior: "smooth" });
  });
});

// ======== Navbar icon placeholder actions ========
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

// ======== SIGNUP FORM ========
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = signupForm.name.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;

    console.log("Signup attempt:", { email });

    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important for cookies
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log("Response:", data);
      alert(data.message);

      if (response.ok) {
        // Redirect to index page after signup
        window.location.href = "../html/index.html";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// ======== LOGIN FORM ========
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    console.log("Login attempt:", { email });

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // important for cookies
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response:", data);
      alert(data.message);

      if (response.ok) {
        window.location.href = "../html/index.html";
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
}

// ======== CHECK LOGIN STATUS ON PROTECTED PAGES ========
const checkAuth = async () => {
  try {
    const response = await fetch("http://localhost:5000/user/profile", {
      method: "GET",
      credentials: "include", // send cookie automatically
    });
    const data = await response.json();

    if (!response.ok) {
      // User not authenticated, redirect to login page
      window.location.href = "../html/login.html";
    } else {
      // User authenticated, display username if needed
      const usernameEl = document.getElementById("username");
      if (usernameEl) usernameEl.textContent = data.user.name;
    }
  } catch (error) {
    console.error("Auth check error:", error);
    window.location.href = "../html/login.html";
  }
};

// Call checkAuth only if the page has a protected area (e.g., sales.html)
if (document.getElementById("protected-content")) {
  checkAuth();
}
// ======== NAVBAR AUTH STATE ========
const signinLink = document.getElementById("signin-link");
const profileMenu = document.getElementById("profile-menu");

const updateNavbarAuthState = async () => {
  try {
    const response = await fetch("http://localhost:5000/user/profile", {
      method: "GET",
      credentials: "include", // REQUIRED for cookie auth
    });

    if (!response.ok) {
      // ❌ Not logged in
      if (signinLink) signinLink.style.display = "block";
      if (profileMenu) profileMenu.style.display = "none";
      return;
    }

    // ✅ Logged in
    const data = await response.json();

    if (signinLink) signinLink.style.display = "none";
    if (profileMenu) profileMenu.style.display = "block";

    console.log("Authenticated user:", data.user);
  } catch (error) {
    console.error("Navbar auth check failed:", error);
  }
};

// Run on every page load
updateNavbarAuthState();

const logoutLink = document.getElementById("logout-link");
const logoutBtn = document.querySelector(".profile-dropdown a:last-child");

if (logoutBtn) {
  logoutBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/user/logout", {
        method: "POST",
        credentials: "include",
      });

      window.location.href = "../html/login.html";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  });
}
