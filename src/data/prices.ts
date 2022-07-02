export type PriceTypeType = {
    title: string,
    price: string,
    description?: string,
}
export type PriceCategoryType = {
    title: string,
    detailPageSorting: number,
    anchor: string,
    description?: string,
    prices: PriceTypeType[],
}

export const priceCategories: PriceCategoryType[] = [
    {
        "title": "Cut",
        "anchor": "cut",
        "detailPageSorting": 0,
        "description": ` Dein Haarschnitt, ist genau so Individeuell wie du. 
Deswegen berechnen wir  nach benötigtem Zeitaufwand und Komplexität sowie gewünschten Serviceleistungen.    
        `,
        "prices": [
            {
                "title": "Just the litte things in life",
                "price": "24 €",
                "description" : "Einfacher Haarschnitt bis 25 Min. Beispiel: Pony nachscheiden, Konturenschnitt, Maschinenschnitt"
            },
            {
                "title": "Keep it simple",
                "price": "43 €",
                "description" : "Alles bis 45min. Beispiel: Waschen, Schneiden, Pflegen, Stylen von einfachen Haarschnitten wie Kurzhaarschnitte / Spitzenschnitt o. Ä."
            },
            {
                "title": "Golden Hour",
                "price": "57 €",
                "description": "Der Klassiker, alles bis 60min. Beispiel: Waschen, Schneiden, Pflegen, Stylen von komplexen Haarschnitten wie Bobs, Stufenhaarschnitten, Mullets o. Ä."
            },
            {
                "title": "I want it all. I want it now",
                "price": "73 €",
                "description": "Größere Dienstleistungen bis 75min. Beispiel:Waschen, Schneiden, Pflegen, Stylen von Neuhaarschnitten bzw. Typveränderungen"

            }
        ]
    },
    {
        "title": "Color",
        "anchor": "color",
        "detailPageSorting": 0,
        "description": `Alle unserer Farbdienstleistungen verstehen sich inkl. passener Pflegeanwendung. <br/>
Bei Farbterminen, die keinen Haarschnitt mit einbeziehen, behalten wir uns vor 14€ als Föhnpauschale zu berechnen. `,
        "prices": [
            {
                "title": "Ansatzfärbung bis 2cm",
                "price": "59 €"
            },
            {
                "title": "Ansatzfärbung ab 2cm",
                "price": "64 €"
            },
            {
                "title": "Längenausgleich",
                "price": "29 € - 63 €",
                "description": "Auffrischung von verblassten Längen und Spitzen"
            },
            {
                "title": "Ansatz Blondierung bis 8 Wochen",
                "price": "98 €",
                "description": "inkl. Gloss"
            },
            {
                "title": "Neublondierung",
                "price": "ab 129 €",
                "description": "inkl. Gloss"
            },
            {
                "title": "Gloss",
                "price": "36 €",
            },
            {
                "title" : "Faceframe",
                "price": "66 €"
            },
            {
                "title" : "Fashion Color",
                "price":  "ab 79 € / Std"
            },

            {
                "title" : "Highlights 1/3",
                "price": "69 €"
            },
            {
                "title" : "Highlights 2/3",
                "price": "89 €"
            },
            {
                "title" : "Highlights 3/3",
                "price": "129 € " , description: "Highlights sind inkl. Gloss/Rootshadow" },
            {
                "title" : "Farbkorrekturen",
                "price": "89 € / Std"
            },
            {
                "title" : "Grauhaarkaschierung",
                "price": "22 €"
            },

        ]
    },
    {
        "title": "Balayage",
        "anchor": "balayage",
        "detailPageSorting": 0,
        "description": "Alle Balayage Pakete sind inkl. Olaplex, Glossing, passender Pflegeanwendung und exkl. Haarschnitt.",

        "prices": [
            {
                "title": "Natural Balayage",
                "price": "ab 140€",
                "description": "Dauer ca. 150min"
            },
            {
                "title": "Fashion Balayage",
                "price": "ab 190€",
                "description": "Dauer ca. 180min"
            },
        ]
    },
    {
        "title": "Beratung",
        "anchor": "beratung",
        "detailPageSorting": 1,
        "description": `
            Du bist dir noch unsicher, was dir steht oder wünscht dir ein komplettes Make-Over? <br><br> 
            Du brauchst einen professionellen Rat bezüglich deiner Haarpflege oder eine ehrliche Einschätzung zu einer Farbkorrektur? 
         `,
        "prices": [
            {
                "title": "Typgerechte Beratung",
                "description": `
                    Komm vorbei und lass dich persönlich beraten! <br/>
                    Im Falle einer Folgebuchung wird die Beratung mit der nächsten Dienstleistung verrechnet. <br>
                `,
                "price": "19€ / 20 Min",
            },
        ]
    },
    {
        "title": "Care",
        "anchor": "care",
        "detailPageSorting": 0,
        "prices": [
            {"title": "Olaplex Rebuild Treatment", "price": "ab 28/39/55 €"},
            {"title" : "Olaplex Shot Color Addon", price: "14 €"},
            {"title" : "K18", price: "28 €"},
            {"title" : "Detox", price: "16 €"},
        ]
    },
    {
        "title": "Sonstiges",
        "anchor": "sonstiges",
        "detailPageSorting": 0,
        "prices": [
            {
                "title": "Blow Dry",
                "price": "38 €",
                "description": "Dauer ca. 40 Min"
            },
            {
                "title": "Fashion Styling",
                "price": "29 €",
                "description": "Dauer ca. 30 Min"
            },
            {
                "title": "Hochstecken",
                "price": "ab 47 €"
            },
            {
                "title": "Brow",
                "price": "15 €",
            },
            {
                "title": "Lashes",
                "price": "15 €",
            },
            {
                "title": "Make-up",
                "price": "ab 38 € / 56 €"
            },
            {
                title: "Extensions",
                price: "Preis auf Anfrage",
                description: `Kontaktiere uns einfach , und wir besprechen deinen Preis!`
            },
        ]
    }

]