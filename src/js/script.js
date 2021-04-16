import modals from "./modules/modals";
import register from "./modules/register";
import events from "./modules/events";
import media from "./modules/media";
import headerMenu from "./modules/headerMenu";
import learnMore from "./modules/learnMore";
import selectTab from "./modules/selectTab";
import scrolling from "./modules/scrolling";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    register();
    events();
    media();
    headerMenu();
    learnMore();
    selectTab();
    scrolling();
    forms();
    mask('[name="tel"]');
    checkTextInputs('[type="text"]');
});




