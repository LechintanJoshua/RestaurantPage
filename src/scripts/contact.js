export default class Contact {
    #content;

    constructor() {
        this.#content = document.querySelector('#content');
    }

    #createTitleCard() {
        const div = document.createElement('div');
        const title = document.createElement('h1');

        title.textContent = 'Contact Us';

        div.appendChild(title);
        div.classList.add('card');

        return div;
    }

    createContact() {
        this.#content.appendChild(this.#createTitleCard());
    }
}