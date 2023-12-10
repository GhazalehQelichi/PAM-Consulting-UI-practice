const mobileMenuBtn = document.querySelector(".nav-hamburger"),
  mobileMenu = document.querySelector(".nav-list"),
  mobileLogo = document.querySelector(".nav-mobile-logo"),
  navListItems = document.querySelectorAll(".nav-list__link");

// Managing DropDown Menu:
document.addEventListener("click", (e) => {
  const isDropDown = e.target.matches("[data-dropdown-menu]"); //a
  if (!isDropDown && e.target.closest("[data-dropdown]") !== null) return; //ul

  let currentDropDown;
  if (isDropDown) {
    currentDropDown = e.target.closest("[data-dropdown]"); //li
    currentDropDown.classList.toggle("nav-list__item--active");
  }
  document
    .querySelectorAll("[data-dropdown].nav-list__item--active")
    .forEach((dropDown) => {
      if (dropDown === currentDropDown) return;
      dropDown.classList.remove("nav-list__item--active");
    });
});

// Toggle Mobile Menu:
function mobileMenuToggle() {
  this.classList.toggle("nav-hamburger--open");
  if (this.classList.contains("nav-hamburger--open")) {
    mobileMenu.style.left = "0";
    mobileLogo.style.opacity = "1";
  } else {
    mobileMenu.style.left = "-35rem";
    mobileLogo.style.opacity = "0";
  }
}
mobileMenuBtn.addEventListener("click", mobileMenuToggle);
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenu.style.left = "-35rem";
    mobileLogo.style.opacity = "0";
    mobileMenuBtn.classList.remove("nav-hamburger--open");
  }
});

// Show Active Menu Item:
navListItems.forEach((navListItem) => {
  navListItem.addEventListener("click", function () {
    document.querySelector(".active-link").classList.remove("active-link");
    this.classList.add("active-link");
  });
});

// Svg And Span OnClick Event To Show City Description,
function showCityDescription(city, citySelectClass, dataType) {
  city.addEventListener("click", () => {
    document
      .querySelector(`.${citySelectClass}`)
      .classList.remove(citySelectClass);
    let cityExplain = document.querySelector(`#${dataType}`);
    cityExplain.classList.add(citySelectClass);
  });
}
const citySvgPaths = document.querySelectorAll(".city-path");
citySvgPaths.forEach((citySvgPath) => {
  showCityDescription(
    citySvgPath,
    "city-visible",
    citySvgPath.dataset.contentId
  );
});
const cityNameSpan = document.querySelectorAll(".city-span");
cityNameSpan.forEach((cityName) => {
  showCityDescription(cityName, "city-visible", cityName.dataset.contentClass);
});
