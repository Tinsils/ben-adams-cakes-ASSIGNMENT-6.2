const products = {
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
  }
};

const params = new URLSearchParams(window.location.search);
const productKey = params.get("product");
const product = products[productKey];

if (product) {
  document.getElementById("page-title").textContent =
    product.name + " | Ben Adam's Cakes";

  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-image").src = product.image;
  document.getElementById("product-image").alt = product.name;
  document.getElementById("product-description").textContent = product.description;
  document.getElementById("allergens").textContent =
    "Allergens include: " + product.allergens.join(", ");

  const extrasContainer = document.getElementById("optional-extras");
  extrasContainer.innerHTML = "";

  // Convert price string (£15.00) → number
  const basePrice = Number(product.price.replace("£", ""));
  let totalPrice = basePrice;

  // ---- OPTIONAL EXTRAS ----
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

  // ---- PRICE ----
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