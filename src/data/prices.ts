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
  hideBookNowLink?: Boolean,
}

export const priceCategories: PriceCategoryType[] = [
  {
    "title": "Cut",
    "anchor": "cut",
    "detailPageSorting": 0,
    "description": ` 
        Dein Haarschnitt ist genau so individuell wie du. Deswegen berechnen wir unsere Dienstleistungen nach benötigtem Zeitaufwand und Komplexität sowie gewünschten Zusatzleistungen.    
        `,
    "prices": [
      {
        "title": "Haarschnitt XS: Just the little things in life",
        "price": "32 €",
        "description": `Bis 30 Min. - Bsp.: Pony nachschneiden, Konturenschnitt, Maschinenschnitt, o.Ä.`
      },
      {
        "title": "Haarschnitt S: Keep it simple",
        "price": "54 €",
        "description": `Bis 50 Min. - Bsp.: Schneiden und Stylen von einfachen Haarschnitten wie Kurzhaarschnitte, Spitzenschnitt/Trockenschnitt, o.Ä.`
      },
      {
        "title": "Haarschnitt M: Golden Hour",
        "price": "70 €",
        "description": `Bis 70 Min. - Bsp.: Waschen, Schneiden, Pflegen, Styling von komplexen Haarschnitten wie Bobs, Stufenhaarschnitte, Mullets/Shags, o.Ä.`
      },
      {
        "title": "Haarschnitt L: I want it all. I want it now",
        "price": "90 €",
        "description": `Bis 85 Min. - Bsp.: Waschen, Schneiden, Pflegen, Stylen von Neuhaarschnitten bzw Typveränderungen`
      }
    ]
  },
  {
    "title": "Color",
    "anchor": "color",
    "detailPageSorting": 0,
    "description": `Alle Farbdienstleistungen verstehen sich inkl. passender Pflegeanwendung. <br> <br> Bei Farbterminen, die keinen Haarschnitt beinhalten, wird eine Föhnpauschale von 16 € berechnet.`, 
    "prices": [
      {
        "title": "Ansatzfärbung bis 2 cm",
        "price": "65 €",
        "description": "Du bekommst deinen Naturansatz gefärbt, der nicht älter als 8 Wochen oder 2 cm rausgewachsen ist."
      },
      {
        "title": "Ansatzfärbung ab 2 cm",
        "price": "69 €",
        "description": "Du bekommst deinen Naturansatz gefärbt, der älter als 8 Wochen oder mehr als 2 cm rausgewachsen ist."
      },
      {
        "title": "Längenausgleich",
        "price": "ab 33 €",
        "description": "Auffrischung von verblassten Längen und Spitzen."
      },
      {
        "title": "Ansatz Blondierung bis 2 cm inkl. Gloss",
        "price": "119 €",
        "description": "Du bekommst deinen Naturansatz blondiert, der bis 2 cm rausgewachsen ist."
      },
      {
        "title": "Neublondierung inkl. Gloss",
        "price": "ab 149 €",
        "description": "Du bekommst dein naturbelassenes Haar komplett blondiert oder dein Naturansatz ist größer als 2 cm."
      },
      {
        "title": "Gloss",
        "price": "ab 39 €",
        "description": "Ein Glossing schenkt dem Haar Glanz und veredelt die bereits bestehende Haarfarbe. Von natürlichen Blondtönen bis hin zu Pastell oder satten Farben."
      },
      {
        "title": "Faceframe inkl. Gloss",
        "price": "74 €",
        "description": `Beim Face Framing, auch "Money Piece” genannt, werden statt des kompletten Haares nur die beiden vorderen Strähnen und Kontur aufgehellt.`
      },
      {
        "title": "Fashion Color",
        "price": "79 € / h",
        "description": `Die neuesten Trends und Färbetechniken von Bunt bis Pastell. Oder doch lieber Split-hair? Rainbow? Say no more! Hier sind der Kreativität keine Grenzen gesetzt.<br>
Fashion Color setzt ein Beratungsgespräch voraus und wird nach Stundensatz berechnet. Alle Materialien sind inklusive. `
      },

      {
        "title": "Highlights 1/3 inkl. Gloss",
        "price": "99 €",
        "description": "Highlights / Strähnen über den Scheitel und der Kontur."
      },
      {
        "title": "Highlights 2/3 inkl. Gloss",
        "price": "119 €",
        "description": "Highlights / Strähnen am halben Kopf und Kontur."
      },
      {
        "title": "Highlights 3/3 inkl. Gloss",
        "price": "159 €",
        "description": "Highlights / Strähnen am gesamten Kopf."
      },
      {
        "title": "Farbkorrekturen",
        "price": "89 € / h",
        "description": `
Die SOS Farbrettung! Du hast dir Zuhause die Haare gefärbt oder kommst unglücklich aus einem anderen Salon? Wir versuchen alles, um das wieder grade zu biegen. 
<br><br>
Eine Farbkorrektur setzt eine Beratung voraus, um dem Dienstleistungsaufwand einzuschätzen. 
Zudem werden Farbkorrekturen nach Stundensatz abgerechnet. Alle Materialien sind dort inkludiert. 

                `
      }

    ]
  },
  {
    "title": "Balayage",
    "anchor": "balayage",
    "detailPageSorting": 0,
    "description": "Alle Balayage Pakete sind inkl. Olaplex, Glossing, passender Pflegeanwendung und exkl. Haarschnitt",

    "prices": [
      {
        "title": "Natural Balayage",
        "price": "ab 170 €",
        "description": "Dauer ca. 150 Min. Du siehst aus, wie von der Sonne geküsst mit natürlicher Helligkeit im Haar. Du hast einen schönen weichen Farbverlauf ohne, das dir ein Ansatz rauswächst."
      },
      {
        "title": "Blonde Balayage",
        "price": "ab 220 €",
        "description": "Dauer ca. 180 Min. Du hast möchtest deutlich Blonder werden und wünscht trotzdem einen natürlich weichen Rauswuchs. Dann ist die Blonde Balayage genau dein Ding!"
      },
      {
        "title": "Fashion Balayage",
        "price": "ab 240 €",
        "description": "Dauer ca. 210 Min. Du hast Lust auf einen bunten / knalligen / pastelligen Farbverlauf ohne das sich ein starker Ansatz bildet."
      }
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
        "title": "Beratung",
        "description": `
                    Komm vorbei und lass dich beraten! <br/>
                    Im Falle einer Folgebuchung wird die Beratung mit der nächsten Dienstleisung verrechnet.
                `,
        "price": "22 € (20 Min.)"
      }
    ]
  },
  {
    "title": "Care",
    "anchor": "care",
    "detailPageSorting": 0,
    "prices": [
      {
        "title": "Olaplex Rebuild Treatment",
        "price": "ab 28 €",
        "description": `
                Tiefenaufbau-Behandlung zum Reparieren von gebrochenen Disulfidbrücken im Haar.
                `
      },
      {
        "title": "Olaplex Color Addon",
        "price": "14 €",
        "description": `
                Olaplex als Addon zur Farbe – für zusätzlichen Schutz der Haarstruktur.
                `
      },
      {
        "title": "K18",
        "price": "28 €",
        "description": `
                K18 ist eine bahnbrechende Innovation und einzigartig in der Kosmetikindustrie. Eine bioaktive Peptid-behandlung, die geschädigtes Haar von innen heraus aufbaut und nachhaltig repariert.
                <br><br>
                 Das Haar wird in seinen ursprünglichen, jugendlichen Zustand zurückversetzt; für ein Haar wie neu. Und das in nur 4 Minuten!
                `
      },
      {
        "title": "Detox",
        "price": "18 €",
        "description": `
Silikon und Mineralablagerungen im Haar entstehen durch den täglichen Gebrauch von handelsüblichen Shampoos und zu hartem Wasser in der Dusche und verhindern die optimale Wirkung von Treatments und Pflegeprodukten sowie die gleichmäßige Färbung der Haare. 
                <br><br>
Metallablagerungen, die durch alte Wasserrohre und Chlorrückstände verursacht werden und die Haare austrocknen, beschweren, glanzlos erscheinen lassen oder im Farbton verändern, werden mit dem unserem Detox effizient beseitigt.
                `
      }
    ]
  },
  {
    "title": "Styling",
    "anchor": "styling",
    "detailPageSorting": 0,
    "prices": [
      {
        "title": "Blow Dry",
        "price": "ab 42 €",
        "description": `
ca. 40 Min. - Waschen und Föhnen der Haare mit Rundbürsten - inkl. Kopfmassage, passender Pflegeanwendung und perfektem Finish.
                `
      },
      {
        "title": "Fashion Styling",
        "price": "ab 32 €",
        "description": "ca. 30 Min. - Ein offenes Haarstyling deiner Wahl. Egal ob Beachwaves, Sleek, Curly oder Hollywood Waves (exkl. Haarwäsche)."
      },
      {
        "title": "Hochstecken",
        "price": "ab 60 €",
        "description": "ca. 60 Min. - Hochsteckfrisur."
      }
    ]
  },
  {
    "title": "More",
    "anchor": "more",
    "detailPageSorting": 0,
    "description": `
Darüber hinaus bieten wir weitere umfangreiche Leistungen wie <b>Extentions</b> an und sind buchbar für <b>Einsätze bei Hochzeiten, Events, Workshops, Seminaren</b> oder <b>Fotoshootings</b>.
        `,
    hideBookNowLink: true,
    "prices": [

      {
        "title": "Auf Anfrage",
        "price": "",
        "description": `
    Wir besprechen dein Anliegen! <a href="/salon#kontakt" class="underline decoration-primary hover:text-primary transition duration-500">Melde dich einfach bei uns</a> 
                `
      }
    ]
  }
];