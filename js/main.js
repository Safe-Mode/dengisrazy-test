const mobileMenuToggleEl = document.querySelector(`.js-nav-toggle`);

const toggleMobileMenu = () => {
  mobileMenuToggleEl.classList.toggle(`nav-toggle--active`);
  document.querySelector(`.js-logo`).classList.toggle(`logo--white`);
  document.querySelector(`.js-user-area-sign`).classList.toggle(`user-area__sign--transparent`);
  document.querySelector(`.js-mobile-menu`).classList.toggle(`page-header__mobile-menu--hidden`);
};

document.documentElement.classList.remove(`no-js`);
toggleMobileMenu();

mobileMenuToggleEl.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  toggleMobileMenu();
});
