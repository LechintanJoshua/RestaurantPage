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
        this.#home.classList.add('active');
        this.#listenAndCreate();
    }

    #homeListener() {
        this.#home.addEventListener('click', () => {
            this.#content.innerHTML = '';
            this.#home.classList.add('active');
            this.#menu.classList.remove('active');
            this.#about.classList.remove('active');

            const home = new Homepage();
            home.createHomepage();
        });
    }

    #menuListiner() {
        this.#menu.addEventListener('click', () => {
            this.#content.innerHTML = '';
            this.#home.classList.remove('active');
            this.#menu.classList.add('active');
            this.#about.classList.remove('active');

            const menu = new Menu();
            menu.createMenu();
        });
    }

    #aboutListiner() {
        this.#about.addEventListener('click', () => {
            this.#content.innerHTML = '';
            this.#home.classList.remove('active');
            this.#menu.classList.remove('active');
            this.#about.classList.add('active');

            const about = new Contact();
            about.createContact();
        });
    }

    #listenAndCreate() {
        const home = new Homepage();
        home.createHomepage();

        this.#homeListener();
        this.#menuListiner();
        this.#aboutListiner();
    }
}