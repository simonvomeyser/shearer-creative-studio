export type PriceType = {
    title: string,
    price: string,
    description?: string,
}
export type PriceCategory = {
    title: string,
    anchor: string,
    prices: PriceType[],
}

export const priceCategories: PriceCategory[] = [
    {
        "title": "Beratung",
        "anchor": "beratung",
        "prices": [
            {
                "title": "Ansatzfärbung <b>bis</b> 2cm",
                "price": "30€ / Stunde",
                "description": 'Massa nec dis dictum auctor cras rhoncus curabitur, ullamcorper pellentesque cursus ac accumsan. <br> <b>Varius adipiscing</b> sem nulla mollis himenaeos nisi cras hendrerit pellentesque mattis consectetur elit, sollicitudin nostra dictumst condimentum natoque torquent praesent facilisis amet sed. Sagittis dapibus dis id cubilia finibus sed varius metus nam congue, dictum mi aliquet facilisis primis quis eros massa.'
            },
            {
                "title": "Ansatzfärbung <b>ab</b> 2cm",
                "price": "50€ / Stunde"
            },
            {
                "title": "Ansatzblondierung + Toner <br> Aber zweizeilig",
                "price": "Umsonst"
            },
            {
                "title": "Neufärbung",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Gloss + Toner",
                "price": "50€ / Stunde"
            },
            {
                "title": "lorem ispum dolor sit amet <i>kursiv</i>",
                "price": "120€ / Stunde"
            }
        ]
    },
    {
        "title": "Cut",
        "anchor": "cut",
        "prices": [
            {
                "title": "Ansatzblondierung + Toner",
                "price": "Umsonst"
            },
            {
                "title": "Neufärbung",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Gloss + Toner",
                "price": "50€ / Stunde"
            },
            {
                "title": "lorem ispum dolor sit amet <i>kursiv</i>",
                "price": "120€ / Stunde"
            },
            {
                "title": "Ansatzfärbung <b>ab</b> 2cm",
                "price": "50€ / Stunde",
                "description": 'Massa nec dis dictum auctor cras rhoncus curabitur, ullamcorper pellentesque cursus ac accumsan. <br> <b>Varius adipiscing</b> sem nulla mollis himenaeos nisi cras hendrerit pellentesque mattis consectetur elit, sollicitudin nostra dictumst condimentum natoque torquent praesent facilisis amet sed. Sagittis dapibus dis id cubilia finibus sed varius metus nam congue, dictum mi aliquet facilisis primis quis eros massa.'

            }
        ]
    },
    {
        "title": "Color",
        "anchor": "color",
        "prices": [
            {
                "title": "Grün",
                "price": "Umsonst"
            },
            {
                "title": "Gelb",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Orange",
                "price": "50€ / Stunde"
            }
        ]
    },
    {
        "title": "Balayage",
        "anchor": "balayage",

        "prices": [
            {
                "title": "Ansatzblondierung + Toner",
                "price": "Umsonst"
            },
            {
                "title": "Neufärbung",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Gloss + Toner",
                "price": "50€ / Stunde"
            },
            {
                "title": "lorem ispum dolor sit amet <i>kursiv</i>",
                "price": "120€ / Stunde"
            },
            {
                "title": "Ansatzfärbung <b>ab</b> 2cm",
                "price": "50€ / Stunde"
            }
        ]
    },
    {
        "title": "Care",
        "anchor": "care",
        "prices": [
            {
                "title": "Grün",
                "price": "Umsonst"
            },
            {
                "title": "Gelb",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Orange",
                "price": "50€ / Stunde"
            }
        ]
    },
    {
        "title": "Styling",
        "anchor": "styling",
        "prices": [
            {
                "title": "Ansatzblondierung + Toner",
                "price": "Umsonst"
            },
            {
                "title": "Neufärbung",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Gloss + Toner",
                "price": "50€ / Stunde"
            },
            {
                "title": "lorem ispum dolor sit amet <i>kursiv</i>",
                "price": "120€ / Stunde"
            },
            {
                "title": "Ansatzfärbung <b>ab</b> 2cm",
                "price": "50€ / Stunde"
            }
        ]
    },
    {
        "title": "Beauty",
        "anchor": "beauty",
        "prices": [
            {
                "title": "Grün",
                "price": "Umsonst"
            },
            {
                "title": "Gelb",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Orange",
                "price": "50€ / Stunde"
            }
        ]
    },
    {
        "title": "Extensions",
        "anchor": "extensions",
        "prices": [
            {
                "title": "Grün",
                "price": "Umsonst"
            },
            {
                "title": "Gelb",
                "price": "7 € / Einmalig"
            },
            {
                "title": "Orange",
                "price": "50€ / Stunde"
            }
        ]
    }

]