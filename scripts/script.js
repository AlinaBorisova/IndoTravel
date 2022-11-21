import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
import {addAccordeon} from "./modules/animation.js";
import {menuControl} from "./modules/menuControl.js";
import {addAirolane} from "./modules/animation.js";
import {renderDatesTour} from "./modules/reservation.js";
import {loadDates} from "./modules/reservation.js";
import { sendForm } from "./modules/reservation.js";


{
 
  const init = () => {
    timer(getElements());
    addAccordeon();
    menuControl();
    if (screen.availWidth > 758) addAirolane();
    // renderDatesTour();
    // renderDatesReservation();
    loadDates(renderDatesTour)
    sendForm()
  };
window.time = init;
}
