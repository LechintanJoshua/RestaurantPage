export default class Homepage {
    #content;

    constructor() {
        this.#content = document.querySelector('#content');
    }

    #createTitleCard () {
        const div = document.createElement('div');
        const header = document.createElement('h1');

        header.textContent = 'Four Tim Trees';

        div.appendChild(header);
        div.classList.add('card');

        return div;
    }

    #createIntroCard () {
        const div = document.createElement('div');
        const pFst = document.createElement('p');
        const pSec = document.createElement('p');

        pFst.textContent = 'Bucătărie artizanală cu suflet';
        pSec.textContent = 'La Four Tim Trees, credem că mâncarea este o poveste spusă \
                            prin foc, arome și texturi. Am creat un meniu care onorează ingredientele proaspete, \
                            transformându-le în preparate pline de caracter. Te invităm într-o atmosferă intimă, \
                            unde fiecare cină devine o experiență de neuitat, iar timpul pare că se oprește în loc.';

        div.appendChild(pFst);
        div.appendChild(pSec);
        div.classList.add('card');

        return div;
    }

    #createProgramCard() {
        const div = document.createElement('div');
        const p = document.createElement('p');
        const ul = document.createElement('ul');
        const progHours = ['Luni: Închis (Ne refacem rezervele de inspirație)',
            'Marți - Joi: 12:00 – 22:00',
            'Vineri - Sâmbătă: 12:00 – 23:30 (Pentru seri prelungite)',
            'Duminică: 10:00 – 21:00 (Brunch relaxat și cină)'
        ]


        for (let i = 0; i < 4; i++) {
            const li = document.createElement('li');

            li.textContent = progHours[i];

            ul.appendChild(li);
        }

        p.textContent = 'Program';

        div.classList.add('card');
        div.appendChild(p);
        div.appendChild(ul);

        return div;
    }

    #createLocationCard() {
        const div = document.createElement('div');
        const pFst = document.createElement('p');
        const pSec = document.createElement('p');

        pFst.textContent = 'Bulevardul Republicii, nr. 12, Timișoara.';
        pSec.textContent = '(Te așteptăm la parterul unei clădiri istorice, la doar câțiva pași de faleza Begăi).';

        div.classList.add('card');
        div.appendChild(pFst);
        div.appendChild(pSec);

        return div;
    }

    createHomepage () {
        this.#content.appendChild(this.#createTitleCard());
        this.#content.appendChild(this.#createIntroCard());
        this.#content.appendChild(this.#createProgramCard());
        this.#content.appendChild(this.#createLocationCard());
    }
}