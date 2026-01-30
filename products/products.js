const products = { // Each products information to be displayed on their product page
  // Victoria Sponge Cake
  "victoria-sponge": {
    name: "Victoria Sponge",
    image: "/images/cakes/victoria-sponge.png",
    description: "Classic Victoria sponge with fresh cream and jam.",
    extras: [
      { id: "candles", label: "Birthday Candles", price: 2 },
      { id: "extra-cream", label: "Extra Cream", price: 3 },
      {
        id: "message",
        label: "Custom Cake Message",
        price: 5,
        type: "text",
        placeholder: "e.g. Happy Birthday Henry"
      }
    ],
    price: "£15.00",
    allergens: ["gluten", "eggs", "dairy"]
  },

  // Chocolate Cake
  "chocolate-cake": {
    name: "Chocolate Cake",
    image: "/images/cakes/chocolate-cake.png",
    description: "Rich chocolate sponge topped with strawberries.",
    extras: [
      { id: "sprinkles", label: "Sprinkles", price: 1 },
      { id: "icing-flowers", label: "Icing Flowers", price: 4 },
      {
        id: "message",
        label: "Custom Cake Message",
        price: 5,
        type: "text",
        placeholder: "e.g. Happy New Year!"
      }
    ],
    price: "£18.00",
    allergens: ["gluten", "eggs", "dairy", "nuts"]
  },

  // Red velvet cake
  "red-velvet-cake": {
    name: "Red Velvet Cake",
    image: "/images/cakes/red-velvet-cake.png",
    description: "Smooth red velvet cake with cream cheese frosting.",
    extras: [
      { id: "sprinkles", label: "Sprinkles", price: 1 },
      { id: "fruit", label: "Added Fruit", price: 4 },
      {
        id: "message",
        label: "Custom Cake Message",
        price: 5,
        type: "text",
        placeholder: "e.g. Happy New Year!"
      }
    ],
    price: "£20.00",
    allergens: ["gluten", "eggs", "dairy"]
  },

  // Lemon sponge cake
  "lemon-sponge": {
    name: "Lemon Sponge",
    image: "/images/cakes/lemon-sponge.png",
    description: "Light and fluffy lemon sponge with a citrusy twist.",
    extras: [
      { id: "herb", label: "Herbs", price: 1 },
      { id: "extra-drizzle", label: "Extra Drizzle", price: 3 },
    ],
    price: "£10.00",
    allergens: ["nuts", "eggs"]
  },

  // Berry cake
  "berry-cake": {
    name: "Berry Cake",
    image: "/images/cakes/berry-cake.png",
    description: "A delicious berry cake with a fruity twist.",
    extras: [
      { id: "sprinkles", label: "Sprinkles", price: 1 },
      { id: "raspberries", label: "Raspberries", price: 5 },
      {
        id: "message",
        label: "Custom Cake Message",
        price: 5,
        type: "text",
        placeholder: "e.g. Happy New Year!"
      }
    ],
    price: "£13.00",
    allergens: ["gluten"]
  },

  // Brownie
  "brownie": {
    name: "Brownie",
    image: "/images/cakes/brownie.png",
    description: "Hard to resist chocolate brownie a soft inside.",
    extras: [
      { id: "strawberries", label: "Strawberries", price: 3 },
      { id: "caster-sugar", label: "Caster Sugar", price: 4 },
      {
        id: "message",
        label: "Grahpic Icon",
        price: 7,
        type: "text",
        placeholder: "Describe the icon you want"
      }
    ],
    price: "£14.00",
    allergens: ["gluten"]
  },

  // Disney cake
  "disney-cake": {
    name: "Disney Cake",
    image: "/images/cakes/disney-cake.png",
    description: "A magical Disney cake with a whimsical design.",
    extras: [
      { id: "gold-icing", label: "Gold Icing", price: 3 },
      {
        id: "message",
        label: "Different Character",
        price: 5,
        type: "text",
        placeholder: "Please specify the character"
      }
    ],
    price: "£20.00",
    allergens: ["gluten", "eggs", "dairy"]
  },

  // Star Wars cake
  "star-wars-cake": {
    name: "Star Wars Cake",
    image: "/images/cakes/star-wars-cake.png",
    description: "A magical Star Wars cake with a whimsical design.",
    extras: [
      { id: "gold-icing", label: "Gold Icing", price: 3 },
      {
        id: "message",
        label: "Different Character",
        price: 5,
        type: "text",
        placeholder: "Please specify the character"
      },
      {
        id: "message",
        label: "Custom Message",
        price: 5,
        type: "text",
        placeholder: "e.g. May the Force be with you"
      }
    ],
    price: "£30.00",
    allergens: ["gluten", "eggs", "dairy"]
      
  },

  // Minecraft cake
  "minecraft-cake": {
    name: "Minecraft Cake",
    image: "/images/cakes/minecraft-cake.png",
    description: "A magical Minecraft cake with a whimsical design.",
    price: "£500.00",
    allergens: ["many pixels"]
      
  }
};

// Get product from URL parameter
const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");
const product = products[productKey];

// Changing the pages title to correspond to the product name
if (product) {
  document.getElementById("page-title").textContent =
    product.name + " | Ben Adam's Cakes";

  // Grabbing all the information about the product and displaying it on the page
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("allergens").textContent =
    "Allergens include: " + product.allergens.join(", ");

  const extrasContainer = document.getElementById("optional-extras");
  extrasContainer.innerHTML = "";

  // Price styles
  const basePrice = Number(product.price.replace("£", ""));
  let totalPrice = basePrice;

  // Optional extras section
  if (product.extras && product.extras.length > 0) {
    const heading = document.createElement("h5");
    heading.textContent = "Optional extras";
    extrasContainer.appendChild(heading);

    product.extras.forEach(extra => {
      const wrapper = document.createElement("div");
      wrapper.className = "form-check mb-2";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "form-check-input";
      checkbox.id = extra.id;
      checkbox.dataset.price = extra.price;

      const label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = extra.id;
      label.innerHTML = `${extra.label} <i>(+£${extra.price})</i>`;


      wrapper.appendChild(checkbox);
      wrapper.appendChild(label);

      // Text input extra
      if (extra.type === "text") {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "form-control mt-2";
        input.placeholder = extra.placeholder;
        input.disabled = true;

        checkbox.addEventListener("change", () => {
          input.disabled = !checkbox.checked;
          updateTotal();
        });

        wrapper.appendChild(input);
      } else {
        checkbox.addEventListener("change", updateTotal);
      }

      extrasContainer.appendChild(wrapper);
    });
  }

  // Price calculation
  const priceEl = document.getElementById("product-price");
  priceEl.textContent = `£${totalPrice.toFixed(2)}`;

  function updateTotal() {
    let total = basePrice;

    document
      .querySelectorAll("#optional-extras input[type='checkbox']")
      .forEach(cb => {
        if (cb.checked) {
          total += Number(cb.dataset.price);
        }
      });

    priceEl.textContent = `£${total.toFixed(2)}`;
  }

} else {
  document.getElementById("product-name").textContent = "Product not found";
}