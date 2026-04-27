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

    #createChefCard() {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const ul = document.createElement('ul');

        const info = ['Head Chef & Co-Fondator',
            '+40 722 111 222',
            'alexandru@fourtimtrees.ro',
        ];

        for (let i = 0; i < 3; i++) {
            const li = document.createElement('li');

            li.textContent = info[i];

            ul.appendChild(li);
        }

        p.textContent = 'Alexandru Mureșan';

        div.appendChild(p);
        div.appendChild(ul);
        div.classList.add('card');

        return div;
    }

    createContact() {
        this.#content.appendChild(this.#createTitleCard());
        this.#content.appendChild(this.#createChefCard());
    }
}