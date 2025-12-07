// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// CTA buttons scroll to contact section
document.querySelectorAll('.cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const contact = document.querySelector('#contact');
    if (!contact) return;
    contact.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar icon placeholder actions
const bindClick = (selector, message) => {
  const el = document.querySelector(selector);
  if (!el) return;
  el.addEventListener('click', e => {
    e.preventDefault();
    alert(message);
  });
};

bindClick('#search-icon', 'Search feature not implemented yet.');
bindClick('#settings-icon', 'Settings page coming soon.');
bindClick('#profile-icon', 'Log in / profile feature missing.');
