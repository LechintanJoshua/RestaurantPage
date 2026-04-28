import Homepage from "./homepage.js";
import Contact from "./contact.js";
import Menu from "./menu.js";

export default class ScreenController {
    #content;
    #home;
    #menu;
    #about;

    constructor() {
        this.#content = document.querySelector('#content');
        this.#home = document.querySelector('#home');
        this.#menu = document.querySelector('#menu');
        this.#about = document.querySelector('#about');
    }
}