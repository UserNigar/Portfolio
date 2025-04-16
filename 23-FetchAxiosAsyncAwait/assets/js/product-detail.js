async function loadProductDetails() {
  let Url = new URLSearchParams(location.search);
  let id = Url.get("id");
  let products = await (await fetch("http://localhost:3000/products")).json();

  let findProduct = products.find((product) => product.id == id);

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isLoginedUser = users.find(user => user.isLogged === true);

  let productContainer = document.querySelector(".product-container");

  if (!productContainer || !findProduct) {
    console.error("Məhsul və ya konteyner tapılmadı.");
    return;
  }

  productContainer.innerHTML = `
    <div class="product-image">
      <img class="img" src="${findProduct.image}" alt="Product Image" />
    </div>

    <div class="product-details">
      <h4 class="product-title">${findProduct.title}</h4>
      <p class="product-category">${findProduct.category}</p>
      <p class="product-price">${findProduct.price}$</p>
      <p class="product-description">${findProduct.description}</p>

      <div class="product-rating">
        <span>${findProduct.rating?.rate || "0"}</span>
        <span>${findProduct.rating?.count || "0"} reviews</span>
      </div>

      <div class="quantity-selector">
        <button class="btn-minus">-</button>
        <input type="number" value="1" min="1" />
        <button class="btn-plus">+</button>
      </div>

      <div class="add-to-basket">
        <button class="btn btn-primary">Add to Basket</button>
      </div>
    </div>
  `;

  let quantityInput = document.querySelector(".quantity-selector input");
  let minusBtn = document.querySelector(".btn-minus");
  let plusBtn = document.querySelector(".btn-plus");

  minusBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value);
    if (current > 1) quantityInput.value = current - 1;
  });

  plusBtn.addEventListener("click", () => {
    let current = parseInt(quantityInput.value);
    quantityInput.value = current + 1;
  });

  let addToCartBtn = document.querySelector(".btn");
  addToCartBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityInput.value) || 1;
    addBasket(findProduct.id, quantity, users, isLoginedUser, products);
  });
}

function addBasket(id, quantity, users, isLoginedUser, products) {
  if (!isLoginedUser) {
    alert("Zəhmət olmasa daxil olun.");
    return;
  }

  let userIndex = users.findIndex(user => user.id === isLoginedUser.id);
  let basket = isLoginedUser.basket || [];

  let findProductInBasket = basket.find(product => product.id === id);

  if (!findProductInBasket) {
    let productToAdd = products.find(product => product.id === id);
    basket.push({ ...productToAdd, count: quantity });
    alert("Məhsul səbətə əlavə edildi.");
  } else {
    findProductInBasket.count += quantity;
    alert("Məhsul sayı artırıldı.");
  }

  isLoginedUser.basket = basket;
  users[userIndex] = isLoginedUser;
  localStorage.setItem("users", JSON.stringify(users));
}


loadProductDetails();
