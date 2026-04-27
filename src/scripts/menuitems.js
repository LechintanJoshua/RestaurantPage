export default class MenuItem {
    #item;
    #title;
    #description;
    #price;
    #quantity;

    constructor(title, description, price, quantity) {
        this.#item = document.createElement('div');
        this.#title = title;
        this.#description = description;
        this.#price = this.#price;
        this.#quantity = quantity;
        this.#item.classList.add('card');
    }
}