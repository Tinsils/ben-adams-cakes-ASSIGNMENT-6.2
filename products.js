const products = {
  "victoria-sponge": {
    name: "Victoria Sponge",
    image: "images/cakes/victoria-sponge.png",
    description: "Classic Victoria sponge with fresh cream and jam."
  },
  "chocolate-cake": {
    name: "Chocolate Cake",
    image: "images/cakes/chocolate-cake.png",
    description: "Rich chocolate sponge topped with strawberries."
  },
  "red-velvet-cake": {
    name: "Red Velvet Cake",
    image: "images/cakes/red-velvet-cake.png",
    description: "Smooth red velvet cake with cream cheese frosting."
  }
};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");

const product = products[productKey];

if (product) {
  document.getElementById("page-title").textContent = product.name;
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-description").textContent = product.description;
} else {
  document.getElementById("product-name").textContent = "Product not found";
}
