import {menuAnimation} from "./animation.js";

export const menuControl = () => {
  const menuBtn = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.header__menu');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      setTimeout(() => {
        menu.style.cssText = `
        opacity: 1;
        z-index: 1;
        `;
      }, 300);
    });
  };
  
  const closeMenu = () => {
    window.addEventListener('click', (e) => {
      const target = e.target;
      if (target !== menuBtn ) {
        menuAnimation();
      };
    });
  };
  openMenu();
  closeMenu();
};