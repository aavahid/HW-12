const homeIcon = document.querySelector(
  'img[src="../assets/svg/home-page.svg"]'
);

homeIcon.addEventListener("click", () => {
  const homepageURL = "ana_sayfanin_urlsi.html";

  window.open("http://127.0.0.1:5500/pages/home/index.html", "_self");
});
