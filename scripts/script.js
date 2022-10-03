import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
import {addAccordeon} from "./modules/acc.js";
import {menuControl} from "./modules/menuControl.js";
{
  const init = () => {
    timer(getElements());
    addAccordeon();
    menuControl();
  };
window.time = init;
}