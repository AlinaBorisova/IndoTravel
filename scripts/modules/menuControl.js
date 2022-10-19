import {menuAnimationOpen} from "./animation.js";
import {menuAnimationClose} from "./animation.js";

export const menuControl = () => {
  const menuBtn = document.querySelector('.header__menu-button');

  const openMenu = () => {
    menuBtn.addEventListener('click', () => {
      if (!menuBtn.classList.contains('menu__active')) {
        menuBtn.classList.add('menu__active');
        menuAnimationOpen();
      } else {
        menuAnimationClose();
        closeMenu();
        menuBtn.classList.remove('menu__active');
      }; 
    });
  };
  
  const closeMenu = () => {
    window.addEventListener('click', (e) => {
      const target = e.target;
      if (target !== menuBtn) {
        if (menuBtn.classList.contains('menu__active')) {
          menuBtn.classList.remove('menu__active');
        };
        menuAnimationClose();
      };
    });
  };
  openMenu();
};