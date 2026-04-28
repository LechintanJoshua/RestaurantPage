import Item from './menuitems.js';

export default class Menu {
    #content;

    constructor() {
        this.#content = document.querySelector('#content');
    }

    #createCategory(category) {
        const div = document.createElement('div');
        const p = document.createElement('p');

        p.textContent = category;


        div.classList.add('card');
        div.classList.add('fam');

        div.appendChild(p);

        return div;
    }

    #createMainCourseItems() {
        const items = {titles: [
                        'Tagliatelle cu Trufe și Hribi',
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
                    prices: ['85 Ron', '120 Ron', '95 Ron', '75 Ron', '80 Ron'],
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

    #createBeveragesItems() {
        const items = {titles: [
                        'Negroni "Four Trees" (Signature Cocktail)',
                        'Limonadă Artizanală cu Soc și Lavandă',
                    ],
                    descriptions: [
                        'O reinterpretare a clasicului, infuzat cu ierburi aromatice \
                        locale, gin uscat, bitter și învăluit într-un fum subtil de lemn de măr.',
                        'Răcoritoare pregătită cu sirop de soc făcut în casă, infuzie proaspătă de \
                        lavandă, lămâie stoarsă și apă minerală.',
                    ],
                    prices: ['40 Ron', '25 Ron'],
                    quantities: ['150ml', '400ml'],
        };

        for (let i = 0; i < 2; i++) {
            const { titles: { [i]: titlu } } = items;
            const { descriptions: {[i]: desc } } = items;
            const { prices: { [i]: price } } = items;
            const { quantities: { [i]: quant } } = items;

            const menuItem = new Item(titlu, desc, price, quant);

            this.#content.appendChild(menuItem.createMenuItem());
        }

    }

    #createDesertItems() {
        const title = 'Lava Cake cu Inimă de Fistic';
        const desc = 'Prăjitură fondantă din ciocolată belgiană neagră, ascunzând \
        un centru cald și lichid de fistic copt, servită cu înghețată artizanală de vanilie.';
        const price = '45 Ron';
        const quant = '200g';
    
        const menuItem = new Item(title, desc, price, quant);

        this.#content.appendChild(menuItem.createMenuItem());
    }

    #createMainCourse(category) {
        this.#content.appendChild(this.#createCategory(category));
        this.#createMainCourseItems();
    }

    #createBeverages(category) {
        this.#content.appendChild(this.#createCategory(category));
        this.#createBeveragesItems();
    }

    #createDeserts(category) {
        this.#content.appendChild(this.#createCategory(category));
        this.#createDesertItems();
    }

    createMenu() {
        this.#createMainCourse('Feluri Principale (Mains)');
        this.#createBeverages('Băuturi (Beverages)');
        this.#createDeserts('Desert (Desserts)');
    }
}