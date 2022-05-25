export type PriceTypeType = {
    title: string,
    price: string,
    description?: string,
}
export type PriceCategoryType = {
    title: string,
    anchor: string,
    description?: string,
    prices: PriceTypeType[],
}

export const priceCategories: PriceCategoryType[] = [
    {
        "title": "Cut",
        "anchor": "cut",
        "description": ` Dein Haarschnitt, ist genau so Individeuell wie du. 
Deswegen berechnen wir den Haarschnitt nach benötigtem Zeitaufwand und Komplexität sowie gewünschten Serviceleistungen.    
        `,
        "prices": [
            {
                "title": "Just the litte things in life ",
                "price": "26 €",
                "description" : "Bis 25min (Beispiel: Pony nach scheiden, Konturenschnitt, Maschinenschnitt) "
            },
            {
                "title": "Keep it simple please",
                "price": "46 €",
                "description" : "Bis 45min (Beispiel: Waschen, Schneiden, Pflegen, Stylen von einfachen Haarschnitten)"
            },
            {
                "title": "Der Klassiker",
                "price": "61€",
                "description": "Beispiel: Waschen, Schneiden, Pflegen, Stylen von Komplexen Haarschnitten"
            },
            {
                "title": "I want it all. I want it now",
                "price": "76€",
                "description": 'Bis 75min( Beispiel:Waschen, Schneiden, Pflegen, Stylen von Neuhaarschnitten bzw.Typveränderungen '

            }
        ]
    },
    {
        "title": "Color",
        "anchor": "color",
        "description": `Alle Farbdienstleistungen verstehen sich immer inkl. passenem Haarpflege Treatment <br><br>
Bei Farbterminen, die keinen Haarschnitt mit einbeziehen, behalten wir uns vor XX€ als Föhnpauschale zu berechnen. 
`,
        "prices": [
            {
                "title": "Ansatzfärbung bis 2cm",
                "price": "XXX"
            },
            {
                "title": "Ansatzfärbung ab 2cm",
                "price": "XXX"
            },
            {
                "title": "Längenausgleich",
                "price": "XXX - XXX",
                "description": "Auffrischung von verblassten Längen und Spitzen"
            },
            {
                "title": "Ansatz Blondierung bis 8 Wochen",
                "price": "XXX",
                "description": "inkl. Gloss"
            },
            {
                "title": "Neublondierung",
                "price": "XXX",
                "description": "inkl. Gloss"
            },
            {
                "title": "Gloss",
                "price": "XXX",
            },
            { "title" : "Faceframe", price: "XXX" },
            { "title" : "Fashion Color", price:  "ab 79€/h" },

            { "title" : "Highlights 1/3", price: "XXX" },
            { "title" : "Highlights 2/3", price: "XXX" },
            { "title" : "Highlights 3/3", price: "XXX" , description: "Highlights sind inkl. Gloss/Rootshadow" },
            { "title" : "Farbkorrekturen", price: "89 € / Std" },

        ]
    },
    {
        "title": "Balayage",
        "anchor": "balayage",
        "description": "Alle Balayage Pakete verstehen sich inkl. Olaplex, Glossing, passendem Pflegetreatment. und exkl. Haarschnitt ",

        "prices": [
            {
                "title": "Natural Balayage (ca. 150min)",
                "price": "ab 140€"
            },
            {
                "title": "Fashion Balayage (ca. 180min)",
                "price": "ab 190€"
            },
        ]
    },
    {
        "title": "Beratung",
        "anchor": "beratung",
        "description": `
            Du bist dir noch unsicher, was dir steht oder du wünschst ein komplettes Make-Over? <br><br> 
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
        "title": "Care",
        "anchor": "care",
        "prices": [
            {"title": "Grün", "price": "Umsonst"},
            {"title" : "Olaplex Treatment", price: "XXX"},
            {"title" : "K18", price: "XXX"},
            {"title" : "Detox", price: "XXX"},
            {"title" : "Styling", price: "XXX"},
            {"title" : "Blow Dry", price: "XXX"},
            {"title" : "Fashion Styling", price: "XXX"},
            {"title" : "Hochstecken", price: "XXX"},
            {"title" : "Beauty", price: "XXX"},
            {"title" : "Brow", price: "15 €"},
            {"title" : "Lashes", price: "XXX"},
            {"title" : "Make-up", price: "XXX"	},
        ]
    },
    {
        "title": "Styling",
        "anchor": "styling",
        "prices": [
            {
                "title": "xxx",
                "price": "xxx"
            },
            {
                "title": "xxx",
                "price": "xxx"
            },
            {
                "title": "xxx",
                "price": "xxx"
            },
        ]
    },
    {
        "title": "Beauty",
        "anchor": "beauty",
        "prices": [
            {
                "title": "xxx",
                "price": "xxx"
            },
            {
                "title": "xxx",
                "price": "xxx"
            },
            {
                "title": "xxx",
                "price": "xxx"
            },
        ]
    },
    {
        "title": "Extensions",
        "anchor": "extensions",
        "prices": [
            {
                title: "Preise auf Anfrage",
                price: "-",
                description: `Kontaktiere uns einfach , und wir besprechen deinen Preis!`
            },
            { "title" : "Highlights 3/3", price: "XXX" , description: "Highlights sind inkl. Gloss/Rootshadow" },

        ]
    }

]