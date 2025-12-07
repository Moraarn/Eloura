const products = [
  {
    id: 1,
    name: "Classic Matte Lipstick",
    price: 800,
    image:
      "https://i.pinimg.com/736x/b7/69/f2/b769f2f2303011c086771ceb82426366.jpg",
    alt: "Lipstick",
  },
  {
    id: 2,
    name: "Full Coverage Foundation",
    price: 1200,
    image:
      "https://i.pinimg.com/736x/79/0c/c9/790cc98a8c53dd7b7a622078ae08f81f.jpg",
    alt: "Foundation",
  },
  {
    id: 3,
    name: "Eyeshadow Palette",
    price: 1500,
    image:
      "https://i.pinimg.com/736x/24/0f/83/240f83311b92561446102dcdf479e8ee.jpg",
    alt: "Eyeshadow Palette",
  },
  {
    id: 4,
    name: "Skin Tone Concealer",
    price: 900,
    image:
      "https://i.pinimg.com/1200x/ae/4b/c9/ae4bc9bd09310621eea415e41405d0e0.jpg",
    alt: "Concealer",
  },
  {
    id: 5,
    name: "Peach Glow Blush",
    price: 600,
    image:
      "https://i.pinimg.com/736x/a3/52/06/a352063e45524eafbfc848efb8d4d930.jpg",
    alt: "Blush",
  },
  {
    id: 6,
    name: "Volume Mascara",
    price: 700,
    image:
      "https://i.pinimg.com/1200x/3f/c3/e5/3fc3e54cecd3992e41572da4bc6693cc.jpg",
    alt: "Mascara",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = products
    .map(
      (product) => `    
        <div class="product-card card">  
            <img src="${product.image}" alt="${product.alt}" /> 
            <div class="card-content">
              <h3>${product.name}</h3>
              <p>Price: Ksh ${product.price}</p>
              <button class="btn">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");
});
