import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
import {addAccordeon} from "./modules/animation.js";
import {menuControl} from "./modules/menuControl.js";
import { addAirolane } from "./modules/animation.js";
import {menuAnimation} from "./modules/animation.js";

{
 
  const init = () => {
    timer(getElements());
    addAccordeon();
    menuControl();
    if (screen.availWidth > 758) addAirolane();

  };
window.time = init;
}