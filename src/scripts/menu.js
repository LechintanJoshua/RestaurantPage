import Item from './menuitems';

export default class Menu {
    #content;

    constructor() {
        this.#content = document.querySelector('content');
    }

    #createCategory(category) {
        const div = document.createElement('div');
        const p = document.createElement('p');

        p.textContent = category;

        div.classList.add('card').add('fam');
        div.appendChild(p);

        return div;
    }

    #createMainCourseItems() {
        const items = {titles: ['Tagliatelle cu Trufe și Hribi',
                        'Obrăjori de Vită Gătiți Lent',
                        'Piept de Rață Caramelizat',
                        'File de Șalău de Captură',
                        'Mușchiuleț de Porc în Mantie de Prosciutto',
                    ],
                    descriptions: [
                        'Paste proaspete de casă, trase în unt clarifiat, \
                        servite cu o cremă fină de hribi de pădure și fulgi de trufe negre proaspăt rase.',
                        'Obrăjori de vită frăgeziți timp de 12 ore în vin roșu, \
                        acompaniați de un piure mătăsos de păstârnac și un sos demiglace intens.',
                        'Rață maturată, cu piele crocantă și gătită roz la interior, acompaniată \
                        de un piure fin de cartofi dulci, sparanghel tras la tigaie și o reducție dulce-acrișoară din vișine.',
                        'Șalău proaspăt, cu o crustă crocantă din ierburi aromatice locale, servit pe un \
                        pat de risotto cremos cu parmezan maturat și un strop de ulei infuzat cu lămâie verde.',
                        'Carne extrem de fragedă, învelită în prosciutto crudo pentru un plus de savoare, servită alături de cartofi \
                        zdrobiți cu unt și usturoi copt, finisată cu un sos catifelat',
                    ],
                    prices: ['85', '120', '95', '75', '80'],
                    quantities: ['350g', '400g', '350g', '300g', '400g'],
        };

        for (let i = 0; i < 5; i++) {
            const { titles: { [i]: titlu } } = items;
            const { descriptions: {[i]: desc } } = items;
            const { prices: { [i]: price } } = items;
            const { quantities: { [i]: quant } } = items;

            const menuItem = new Item(titlu, desc, price, quant);

            this.#content.appendChild(menuItem.createMenuItem());
        }
    }

    #createMainCourse(category) {
        this.#content.appendChild(this.#createCategory());
        this.#createMainCourseItems();
    }
}