const products = [
  {
    id: 1,
    name: "MINI SIZE,MAJOR GRIP",
    description:
      "Lock dow your look with the new mini mattifying +hydrating primers.",
    image:
      "https://i.pinimg.com/736x/c6/5a/0f/c65a0fc52d4d0224df85f5d8c6daa3b6.jpg",
    hoverImage:
      "https://i.pinimg.com/1200x/99/3d/0a/993d0ad35b45d3df981101166e99ef13.jpg",
    alt: "Lipstick",
  },
  {
    id: 2,
    name: "REDIFINE YOUR EVERYDAY EYE",
    description: "Amplify your eye look with the latest essentials",
    image:
      "https://i.pinimg.com/736x/a8/bc/ab/a8bcab80f4950b56f500e3925b0072f8.jpg",
    hoverImage:
      "https://i.pinimg.com/1200x/19/6d/e2/196de2003b3afbba0c25295462e7325f.jpg",
    alt: "Foundation",
  },
  {
    id: 2,
    name: "GET THAT BODY GLOWING",
    description: "Indulge in hydrating body faves that feel extra luxe.",
    image:
      "https://i.pinimg.com/1200x/50/4e/60/504e6037f05f1c8f2cbe05ffc5a4106b.jpg",
    hoverImage:
      "https://i.pinimg.com/1200x/be/04/56/be04560acf1590eed2bb644c19b3d9ed.jpg",
    alt: "Foundation",
  },
  {
    id: 2,
    name: "SOFTEN AND STUNT",
    description: "Swipe on lip care and olor for a smooth,showstopping pout",
    image:
      "https://i.pinimg.com/1200x/88/56/b3/8856b3194a69fee0959248abcf1d7a30.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/23/d0/0e/23d00e9b570b7f671aa5ff18a5ce77cc.jpg",
    alt: "Foundation",
  },
  {
    id: 2,
    name: "HYDRATE & GLOW BODY LOTION",
    description:
      "Lightweight lotion that deeply hydrates skin for a radiant, dewy finish.",
    image:
      "https://i.pinimg.com/736x/04/75/51/0475511bd483768ebfaf26b9677d1c34.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/d2/52/58/d25258bf555715bf6cc40569572fd635.jpg",
    alt: "Foundation",
  },
  {
    id: 2,
    name: "MATTE LIP STAIN",
    description:
      "Long-wear, transfer-resistant color with a comfortable velvety matte finish.",
    image:
      "https://i.pinimg.com/736x/44/bd/76/44bd769bcc0a2a29b02e608a1a368281.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/07/d9/03/07d9030ba7fc42905d80bbbfeaf6f3d0.jpg",
    alt: "Foundation",
  },
  {
    id: 2,
    name: "REFRESHING FACIAL MIST",
    description: "Cooling spray to hydrate and revive skin throughout the day.",
    image:
      "https://i.pinimg.com/736x/1b/ee/99/1bee994f421d4507a6092649bcc69f4a.jpg",
    hoverImage:
      "https://i.pinimg.com/736x/e2/f9/dc/e2f9dcf6bbbd0aa62be21810534d578c.jpg",
    alt: "Foundation",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("offselectitems");

  section.innerHTML += `
    <div class="offselect-scroll" id="offselectScroll">
      ${products
        .map(
          (product) => `
        <div class="product-item">
          <div class="offselect-card">
            <img 
              src="${product.image}" 
              data-hover="${product.hoverImage}" 
              alt="${product.alt}"
            />
          </div>

          <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="login.html" class="p">Shop Now</a>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;

  const scrollContainer = document.getElementById("offselectScroll");

  /* Arrow scrolling */
  document.getElementById("scroll-left").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -300 });
  });

  document.getElementById("scroll-right").addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 300 });
  });

  /* Mouse wheel horizontal scroll */
  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  });

  /* Image hover swap */
  document.querySelectorAll(".offselect-card img").forEach((img) => {
    const original = img.src;
    const hover = img.dataset.hover;
    if (!hover) return;

    img.addEventListener("mouseenter", () => (img.src = hover));
    img.addEventListener("mouseleave", () => (img.src = original));
  });
});
