export type PriceType = {
    title: string,
    price: string,
    description?: string,
}
export type PriceCategory = {
    title: string,
    anchor: string,
    description?: string,
    prices: PriceType[],
}

export const priceCategories: PriceCategory[] = [
    {
        "title": "Beratung",
        "anchor": "beratung",
        "description": `
            Du bist dir noch unsicher, was dir steht oder du wünscht ein komplettes Make-Over? <br><br> 
            Du brächtest einen professionellen Rat bezüglich deiner Heimpflege oder brauchst eine ehrliche Einschätzung zu einer Farbkorrektur? 
         `,
        "prices": [
            {
                "title": "Typgerechte Beratung",
                "description": `
                    Wir setzen uns zusammen und du bekommst eine persönliche Beratung! 
                    Die Beratung wird im Falle einer Folgebuchung mit der nächsten Dienstleistung verrechnet.<br>
                `,
                "price": "19€ / 20 Min",
            },
        ]
    },
    {
        "title": "Cut",
        "anchor": "cut",
        "description": ` Dein Haarschnitt, ist genau so Individeuell wie du. 
Deswegen berechnen wir den Haarschnitt nach benötigtem Zeitaufwand und Komplexität sowie gewünschten Serviceleistungen.    
        `,
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