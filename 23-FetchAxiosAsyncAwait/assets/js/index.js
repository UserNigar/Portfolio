document.addEventListener("DOMContentLoaded", async() => {
  let products = await (await fetch("http://localhost:3000/products")).json();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let isLoginedUser = users.find(user => user.isLogged === true);

  let userBtn = document.querySelector(".username");
  let login = document.querySelector(".login");
  let register = document.querySelector(".register");
  let logout = document.querySelector(".logout");
  let edit = document.querySelector(".edit");

  let logoutUserFunction = () => {
    if (isLoginedUser) {
      isLoginedUser.isLogged = false;
      localStorage.setItem("users", JSON.stringify(users));
      isLoginedUser = null;
      toatifyByPage("Hesabdan çıxış edildi!");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
      updateUserStatus();
    }
  };

  logout.addEventListener("click", logoutUserFunction);

  function updateUserStatus() {
    if (isLoginedUser) {
      userBtn.textContent = isLoginedUser.name;
      register.classList.add("d-none");
      login.classList.add("d-none");
      logout.classList.remove("d-none");
      edit.classList.remove("d-none");
    } else {
      userBtn.textContent = "Username";
      register.classList.remove("d-none");
      login.classList.remove("d-none");
      logout.classList.add("d-none");
      edit.classList.add("d-block");
    }
  }

  updateUserStatus();

  function createUserCard() {
    let cards = document.querySelector(".cards");
    cards.innerHTML = "";

    products.forEach(product => {
      let card = document.createElement("div");
      card.classList.add("card");

      let heartIcon = document.createElement("i");
      heartIcon.classList.add("card-heart", "fa-heart");

      let isInWishlist = isLoginedUser?.wishlist?.some(item => item.id === product.id);
      if (isInWishlist) {
        heartIcon.classList.add("fa-solid");
      } else {
        heartIcon.classList.add("fa-regular");
      }

      heartIcon.addEventListener("click", (e) => {
        e.stopPropagation()
        toggleAddWishlist(product.id, heartIcon);
      });

      let cardImage = document.createElement("div");
      cardImage.classList.add("card-image");

      let img = document.createElement("img");
      img.src = product.image;

      let cardContent = document.createElement("div");
      cardContent.classList.add("card-content");

      let cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = `${product.title.slice(0, 20)}...`;

      let cardCategory = document.createElement("p");
      cardCategory.classList.add("card-category");
      cardCategory.textContent = product.category;

      let cardFooter = document.createElement("div");
      cardFooter.classList.add("card-footer");

      let cardPrice = document.createElement("span");
      cardPrice.classList.add("card-price");
      cardPrice.textContent = `$${product.price}`;

      let cardRating = document.createElement("div");
      cardRating.classList.add("card-rating");

      let cardRate = document.createElement("span");
      cardRate.textContent = `⭐ ${product.rating.rate}`;

      let cardReviewsCount = document.createElement("span");
      cardReviewsCount.textContent = `(${product.rating.count} rəy)`;

      let addBasketBtn = document.createElement("button");
      addBasketBtn.classList.add("add-button");
      addBasketBtn.textContent = "Səbətə əlavə et";
      addBasketBtn.addEventListener("click", (e) => {
        e.stopPropagation()
        addBasket(product.id);
      });

      cardRating.append(cardRate, cardReviewsCount);
      cardFooter.append(cardPrice, cardRating);
      cardContent.append(cardTitle, cardCategory, cardFooter, addBasketBtn);
      cardImage.appendChild(img);
      card.append(heartIcon, cardImage, cardContent);

      card.addEventListener("click", () => {
        window.location.href = `product-detail.html?id=${product.id}&title=${encodeURIComponent(product.title)}`;
      });
      
      

      cards.appendChild(card);
    });
  }

  function toggleAddWishlist(productId, heartIcon) {
    if (!isLoginedUser) {
      toatifyByPage("Zəhmət olmasa əvvəlcə daxil olun.");
      return;
    }

    if (!isLoginedUser.wishlist) {
      isLoginedUser.wishlist = [];
    }

    let userIndex = users.findIndex(user => user.id === isLoginedUser.id);
    let findProductIndex = isLoginedUser.wishlist.findIndex(item => item.id === productId);
    let findProduct = products.find(product => product.id === productId);

    if (findProductIndex === -1) {
      isLoginedUser.wishlist.push(findProduct);
      heartIcon.classList.add("fa-solid");
      heartIcon.classList.remove("fa-regular");
      toatifyByPage("Məhsul wishlist-ə əlavə edildi.");
    } else {
      isLoginedUser.wishlist.splice(findProductIndex, 1);
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
      toatifyByPage("Məhsul wishlistdən silindi.");
    }

    users[userIndex] = isLoginedUser;
    localStorage.setItem("users", JSON.stringify(users));
  }

  function addBasket(productId) {
    if (!isLoginedUser) {
      toatifyByPage("Zəhmət olmasa əvvəlcə daxil olun.");
      return;
    }

    let userIndex = users.findIndex(user => user.id === isLoginedUser.id);
    let basket = isLoginedUser.basket || [];

    let findProduct = basket.find(product => product.id === productId);

    if (!findProduct) {
      let productToAdd = products.find(product => product.id === productId);
      basket.push({ ...productToAdd, count: 1 });
      toatifyByPage("Məhsul səbətə əlavə edildi.");
    } else {
      findProduct.count++;
      toatifyByPage("Məhsul sayı artırıldı.");
    }

    isLoginedUser.basket = basket;
    users[userIndex] = isLoginedUser;
    localStorage.setItem("users", JSON.stringify(users));

    basketCount(); 
  }

  function basketCount() {
    let basket = isLoginedUser?.basket || [];
    let basketItemCount = basket.reduce((acc, product) => acc + product.count, 0);

    let basketCountElement = document.querySelector(".basketIcon sup");
    if (basketCountElement) {
      basketCountElement.textContent = basketItemCount;
    }
  }

  basketCount();
  createUserCard();
});

let toatifyByPage = (text) => {
  Toastify({
    text: text,
    duration: 3000,
    gravity: "top",
    position: "left",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};
