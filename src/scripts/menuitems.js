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

    #createTitle() {
        const p = document.createElement('p');

        p.textContent = this.#title;

        return p;
    }

    #createFoodDescription() {
        const p = document.createElement('p');

        p.textContent = this.#description;

        return p;
    }

    #createPrice() {
        const p = document.createElement('p');

        p.textContent = this.#price;

        return p;
    }

    #createQuanity() {
        const p = document.createElement('p');

        p.textContent = this.#quantity;

        return p;
    }

    #createFoodInfo () {
        const div = document.createElement('div');

        div.classList.add('details');
        div.appendChild(this.#createPrice());
        div.appendChild(this.#createQuanity());

        return div;
    }

    createMenuItem() {
        this.#item.appendChild(this.#createTitle());
        this.#item.appendChild(this.#createFoodDescription());
        this.#item.appendChild(this.#createFoodInfo());

        return this.#item;
    }
}