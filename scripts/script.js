import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
{
  const init = () => {
    timer(getElements());
  };
window.time = init;
}