let products = [
  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
          "rate": 3.9,
          "count": 120
      }
  },
  // ... (other products)
  {
      "id": 20,
      "title": "DANVOUY Womens T Shirt Casual Cotton Short",
      "price": 12.99,
      "description": "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      "category": "women's clothing",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      "rating": {
          "rate": 3.6,
          "count": 145
      }
  }
];

let Url = new URLSearchParams(location.search);
let id = Url.get("id");

let findProduct = products.find((product) => product.id == id);

let users = JSON.parse(localStorage.getItem("users")) || [];
let isLoginedUser  = users.find(user => user.isLogged === true);

let productContainer = document.querySelector(".product-container");

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
    <span>${findProduct.rating.rate}</span>
    <span>${findProduct.rating.count} reviews</span>
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

let addToCartBtn = document.querySelector(".btn");
addToCartBtn.addEventListener("click", () => {
addBasket(findProduct.id); // Pass the product ID to the function
});

function addBasket(id) {
let userIndex = users.findIndex(user => user.id === isLoginedUser .id);
let basket = isLoginedUser .basket || [];

let findProductInBasket = basket.find(product => product.id === id);

if (!findProductInBasket) {
  let productToAdd = products.find(product => product.id === id);
  basket.push({ ...productToAdd, count: 1 }); // Add the entire product object with count
  alert("Məhsul səbətə əlavə edildi.");
} else {
  findProductInBasket.count++; // Increment the count of the existing product
  alert("Məhsul sayı artırıldı.");
}

isLoginedUser .basket = basket; // Update the user's basket
users[userIndex] = isLoginedUser ; // Update the user in the users array
localStorage.setItem("users", JSON.stringify(users)); // Save the updated users array
}