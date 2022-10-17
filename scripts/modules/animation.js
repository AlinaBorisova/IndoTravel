export const addAccordeon = () => {
  const items = document.querySelectorAll('.travel__item');
  const buttons = document.querySelectorAll('.travel__item-title');
  const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');

  let heightWrapper = 0;
  textWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
      heightWrapper = elem.scrollHeight
    };
  });

  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < items.length; i++) {
        if (index === i) {
          textWrapper[i].style.height = 
          items[i].classList.contains('travel__item_active') ?
          '' : `${heightWrapper}px`;
          items[i].classList.toggle('travel__item_active');
        } else {
          items[i].classList.remove('travel__item_active');
          textWrapper[i].style.height = '';
        };
      };
    });
  });
};

export const addAirolane = () => {
  const docEl = document.documentElement;
  const fly = document.createElement('div');
  fly.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background: url('img/airplane.svg') center/contain no-repeat;
  `;
  document.body.append(fly);

  const calcPositionFly = () => {
    const maxTop = screen.availHeight - fly.clientHeight * 2;
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;
    const percentScroll = (window.pageYOffset * 100) / maxScroll;

    const top = 1 - maxTop * (percentScroll / 100);
    fly.style.transform = `translateY(${top}px)`;
  };

  window.addEventListener('scroll', () => {
    requestAnimationFrame(calcPositionFly)
  });
};

export const menuAnimationOpen = () => {
  const menu = document.querySelector('.header__menu');
  let op = 0;
  setTimeout(function stepMenu() {
    if (op > 1) return;
    menu.style.opacity = op;
    op += 0.1;
    menu.style.zIndex = 1
    setTimeout(stepMenu, 100);
  }, 100);
};

export const menuAnimationClose = () => {
  const menu = document.querySelector('.header__menu');
  let op = 0.1;
  let stepMenu = setInterval(() => {
    menu.style.opacity -= op;
    if (menu.style.opacity <= 0) {
      clearInterval(stepMenu)
      menu.style.opacity = 0;
      menu.style.zIndex = 0;
    };
  }, 100);
};