import Item from './menuitems';

export default class Menu {
    #content;

    constructor() {
        this.#content = document.querySelector('content');
    }
}