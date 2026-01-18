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
  },
  "lemon-sponge": {
    name: "Lemon Sponge",
    image: "images/cakes/lemon-sponge.png",
    description: "A lovely Lemon Sponge with fresh lemons topped with a zesty lemon glaze."
  },
  "berry-cake": {
    name: "Berry Cake",
    image: "images/cakes/berry-cake.png",
    description: "This berry cake is packed with fresh mixed berries and light frosting."
  },
  "brownie": {
    name: "Brownie",
    image: "images/cakes/brownie.png",
    description: "Delicious fudgy brownies with a crackly top, perfect for chocolate lovers."
  },
  "disney-cake": {
    name: "Disney Cake",
    image: "images/cakes/disney-cake.png",
    description: "A mickey mouse themed cake perfect for any Disney fan!"
  },
  "star-wars-cake": {
    name: "Star Wars Cake",
    image: "images/cakes/star-wars-cake.png",
    description: "A galaxy-themed cake perfect for any Star Wars fan!"
  },
  "minecraft-cake": {
    name: "Minecraft Cake",
    image: "images/cakes/minecraft-cake.png",
    description: "A pixelated cake perfect for any Minecraft fan!"
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
