import {timer} from "./modules/timer.js";
import {getElements} from "./modules/timer.js";
import {addAccordeon} from "./modules/animation.js";
import {menuControl} from "./modules/menuControl.js";
import {addAirolane} from "./modules/animation.js";
import {sendForm} from "./modules/reservation.js";
// import {httpRequest} from "./modules/reservation.js";
// import {getData} from "./modules/reservation.js";
// import {URL} from "./modules/reservation.js";
// import {mask} from "./modules/reservation.js";
// import {justValidateForm} from "./modules/reservation.js";

{
  const init = () => {
    // timer(getElements());
    // addAccordeon();
    menuControl();
    // if (screen.availWidth > 758) addAirolane();
    // getData();
    // mask();
    // justValidateForm();
    sendForm();
  };
window.time = init;
}
