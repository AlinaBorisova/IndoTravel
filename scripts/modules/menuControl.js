export const menuControl = () => {
  const menuBtn = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.header__menu');
  const li = document.querySelectorAll('.header__item');
 
  const openMenu = () => {
    const menuBtn = document.querySelector('.header__menu-button');
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('header__menu_active')
    })
  };

  const closeMenu = () => {
    window.addEventListener('click', (e) => {
      const target = e.target;
      if (target !== menuBtn) {
        menu.classList.remove('header__menu_active')
      };
    });
    li.forEach(elem => {
      for (let i = 0; i < menu.length; i++) {
        elem.addEventListener('click', () => {
          menu.classList.toggle('header__menu_active')
        });
      };
    });
  };
  openMenu();
  closeMenu();
};
