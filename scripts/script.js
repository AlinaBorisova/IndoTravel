import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
import {addAccordeon} from "./modules/animation.js";
import {menuControl} from "./modules/menuControl.js";
import {addAirolane} from "./modules/animation.js";
import {renderDatesTour} from "./modules/reservation.js";
// import {renderDatesReservation} from "./modules/reservation.js";

{
 
  const init = () => {
    timer(getElements());
    addAccordeon();
    menuControl();
    if (screen.availWidth > 758) addAirolane();
    renderDatesTour();
    // renderDatesReservation();
  };
window.time = init;
}
