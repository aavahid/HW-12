const productContainer = document.querySelector(
  "#product-section > div > .product-container"
);

products.forEach((p) => {
  const productDiv = document.createElement("div");
  productDiv.className = "product";
  const productImg = document.createElement("img");
  productImg.src = p.imgUrl;
  const productName = document.createElement("h3");
  productName.textContent = p.name;
  const productPrice = document.createElement("p");
  productPrice.textContent = p.price;
  const iconContainer = document.createElement("div");
  iconContainer.className = "icon-container";
  const detailIcon = document.createElement("img");
  detailIcon.src = "../assets/svg/detail.svg";
  const cartIcon = document.createElement("img");
  cartIcon.src = "../assets/svg/cart.svg";
  const favoriteIcon = document.createElement("img");
  favoriteIcon.src = "../assets/svg/favorite.svg";

  detailIcon.addEventListener("click", () => {
    window.open(
      `http://127.0.0.1:5500/pages/product-detail/index.html?product_id=${p.id}`,
      "_self"
    );
  });
  iconContainer.append(cartIcon, favoriteIcon, detailIcon);

  productDiv.append(productImg, productName, productPrice, iconContainer);
  productContainer.append(productDiv);

  const svgs = iconContainer.querySelectorAll("img");
  for (let i = 0; i < svgs.length - 1; i++) {
    svgs[i].style.marginRight = "20px";
    svgs[i].style.marginTop = "5px";
  }
  for (const svg of svgs) {
    svg.addEventListener("mouseover", () => {
      svg.style.transform = "scale(2.05)";
    });

    svg.addEventListener("mouseout", () => {
      svg.style.transform = "scale(1)";
      svg.style.boxShadow = "none";
    });
  }

  iconContainer.style.gridTemplateColumns = "repeat(2, 1fr)";
});
