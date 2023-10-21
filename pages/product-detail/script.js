const homeIcon = document.querySelector(
  'img[src="../assets/svg/home-page.svg"]'
);

homeIcon.addEventListener("click", () => {
  const homepageURL = "ana_sayfanin_urlsi.html";

  window.open("http://127.0.0.1:5500/pages/home/index.html", "_self");
});

let searchParams = new URLSearchParams(window.location.search);

let paramsProductId = searchParams.get("product_id");

let product = products.find((p) => paramsProductId == p.id);
if (!product) {
  window.open("http://127.0.0.1:5500/pages/not-found/index.html", "_self");
}

const productImg = document.getElementById("product-img");
productImg.src = product.imgUrl;

const productName = document.getElementById("product-name");
productName.textContent = product.name;

const productPrice = document.getElementById("product-price");
productPrice.textContent = product.price;
const productDetailInfo = document.getElementById("product-info");
productDetailInfo.textContent = product.productInfo;
