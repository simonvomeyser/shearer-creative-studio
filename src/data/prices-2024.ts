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
        "price": "27 €",
        "description": `Mini Haarschnitt bis 25 Min. Zeitaufwand <br> (Beispiel: Pony schneiden / Konturenschnitt / Maschinenschnitt ohne Waschen)`
      },
      {
        "title": "Haarschnitt S: Keep it simple",
        "price": "47 €",
        "description": `Haarschnitt bis 45 Min. Zeitaufwand  <br> (Beispiel: Waschen, Schneiden, Pflegen, Stylen von einfachen Kurzhaarschnitten /  Trockenschnitt / Spitzenschnitt / Feine Haare o. Ä.)`
      },
      {
        "title": "Haarschnitt M: Golden Hour",
        "price": "61 €",
        "description": `Der Klassiker, Haarschnitt bis 60 Min. Zeitaufwand  <br> (Beispiel: Waschen, Schneiden, Pflegen, Stylen von komplexen Haarschnitten wie Bobs /Stufenhaarschnitten / Mullets / Shags /  o. Ä.)`
      },
      {
        "title": "Haarschnitt L: I want it all. I want it now",
        "price": "79 €",
        "description": `Haarschnitt bis 75 Min. Zeitaufwand  <br> (Beispiel: Waschen, Schneiden, Pflegen, Stylen von Neuhaarschnitten bzw.Typveränderungen / Haarschnitt + Aufwendigen Styling)`
      }
    ]
  },
  {
    "title": "Color",
    "anchor": "color",
    "detailPageSorting": 0,
    "description": `Alle Farbdienstleistungen verstehen sich inkl. passender Pflegeanwendung. <br> <br> Bei Farbterminen, die keinen Haarschnitt beinhalten, behalten wir uns vor 14 € als Föhnpauschale zu berechnen`,
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
        "price": "33 € - 69 €",
        "description": "Auffrischung von verblassten Längen und Spitzen mit oxidativer Haarfarbe. 29 € - 63 € Je nach Materialverbrauch."
      },
      {
        "title": "Ansatz Blondierung bis 8 Wochen",
        "price": "119 €",
        "description": "Du bekommst deinen Naturansatz blondiert, der nicht älter als 8 Wochen oder 2 cm rausgewachsen ist. (inkl. Gloss)"
      },
      {
        "title": "Neublondierung",
        "price": "ab 149 €",
        "description": "Du bekommst dein naturbelassenes Haar komplett blondiert oder dein Naturansatz ist größer als 2 cm. (inkl. Gloss)"
      },
      {
        "title": "Gloss",
        "price": "39 €",
        "description": "Ein Glossing schenkt dem Haar Glanz und veredelt die bereits bestehende Haarfarbe. Von Natürlichen Blondtönen, bis hin zu Pastell oder satten Farben. Das Haar wird in seiner Struktur nicht angegriffen und je nach Haarwaschverhalten hält es mehrere Wochen."
      },
      {
        "title": "Faceframe",
        "price": "74 €",
        "description": `Beim Face Framing, auch "Money Piece” genannt, werden statt des kompletten Haares nur die beiden vorderen Strähnen und Kontur aufgehellt. <br> Also jeweils eine Strähne rechts und links vom Scheitel. Die blonden Strähnen vorne rahmen das Gesicht ein und geben dem ganzen Look eine frische Note`
      },
      {
        "title": "Fashion Color",
        "price": "ab 79 € / h",
        "description": `Die neuesten Trends und Färbetechniken von Bunt bis Pastell. Oder doch lieber Split-hair? Rainbow? Say no more! Hier sind der Kreativität keine Grenzen gesetzt.<br>
Fashion Color setzt ein Beratungsgespräch voraus und wird nach Stundensatz berechnet. Alle Materialien sind inklusive. `
      },

      {
        "title": "Highlights 1/3",
        "price": "89 €",
        "description": "Highlights / Strähnen über den Scheitel und der Kontur, inkl. Gloss/Rootshadow & Olaplex"
      },
      {
        "title": "Highlights 2/3",
        "price": "109 €",
        "description": "Highlights / Strähnen am halben Kopf und Kontur. Inkl. Gloss/Rootshadow & Olaplex"
      },
      {
        "title": "Highlights 3/3",
        "price": "149 € ",
        "description": "Highlights / Strähnen am gesamten Kopf. Inkl. Gloss/Rootshadow & Olaplex"
      },
      {
        "title": "Farbkorrekturen",
        "price": "89 € / Std",
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
        "price": "ab 170€",
        "description": "Dauer ca. 150 Min. Du siehst aus, wie von der Sonne geküsst mit natürlicher Helligkeit im Haar. Du hast einen schönen weichen Farbverlauf ohne, das dir ein Ansatz rauswächst."
      },
      {
        "title": "Blonde Balayage",
        "price": "ab 220€",
        "description": "Dauer ca. 180 Min. Du hast möchtest deutlich Blonder werden und wünscht trotzdem einen natürlich weichen Rauswuchs. Dann ist die Blonde Balayage genau dein Ding!"
      },
      {
        "title": "Fashion Balayage",
        "price": "ab 240€",
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
        "title": "Typgerechte Beratung",
        "description": `
                    Komm vorbei und lass dich persönlich beraten! <br/>
                    Im Falle einer Folgebuchung wird die Beratung mit der nächsten Dienstleistung verrechnet. <br>
                `,
        "price": "22€ / 20 Min"
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
        "price": "ab 28/39/55 €",
        "description": `
                Olaplex ist der erste Wirkstoff, der geschädigtes Haar im Inneren aufbaut. Anders als Pflegeprodukte wirkt Olaplex nicht an der Haaroberfläche, sondern repariert gebrochene Disulfidbrücken im Haar dauerhaft und ohne sich auszuwaschen. 
                <br><br>
                Für drastisch reduzierten Haarbruch bei chemischen Friseur-Anwendungen aller Art und stärkeres, gesünderes und glänzenderes Haar als jemals zuvor.
                <br><br>
                28€ bis Kinnlänge / 39€ bis Schlüsselbeinlänge / 55€ ab Brustlänge 
                `
      },
      {
        "title": "Olaplex Shot Color Addon",
        "price": "14 €",
        "description": `
                Es werden 3,75ml Olaplex No1 als "repair booster" in die Farb- oder Blondiercreme gegeben um das Haar von Anfang an so wenig wie uns möglich zu beschädigen.  
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
        "price": "42 €",
        "description": `
Waschen und Föhnen der Haare mit Rundbürsten - inkl. Kopfmassage, passender Pflegeanwendung und perfektem Finish. Dauer ca. 40 Min.
                `
      },
      {
        "title": "Fashion Styling",
        "price": "32 €",
        "description": "Ein offenes Haarstyling deiner Wahl. Egal ob Beachwaves, Sleek, Curly oder Hollywood Waves für deinen perfekten Auftritt. (Dienstleistung exkl. Haarwäsche). Dauer ca. 30 Min."
      },
      {
        "title": "Hochstecken",
        "price": "ab 52 €"
      }
    ]
  },
  {
    "title": "Beauty",
    "anchor": "beauty",
    "detailPageSorting": 0,
    "prices": [
      {
        "title": "Brow",
        "price": "17 €",
        "description": `
Typgerecht gefärbte Brauen um deinem Gesicht mehr Kontur und Ausdruck verleihen.
                `
      },
      {
        "title": "Lashes",
        "price": "17 €",
        "description": "Typgerecht gefärbte Wimpern für einen perfekten Augenaufschlag verleihen dem Gesicht mehr Kontur, der Blick wirkt wacher, die Augen größer."
      },
      {
        "title": "Make-up",
        "price": "42/75 €",
        "description": "Natural Make-up 42 € Glamour Make-up 75 €"
      }
    ]
  },
  {
    "title": "More",
    "anchor": "more",
    "detailPageSorting": 0,
    "description": `
Darüber hinaus bieten wir weitere umfangreiche Leistungen wie <b>Extentions</b> und <b>Gutscheinen</b> an und sind buchbar für <b>Einsätze bei Hochzeiten, Events, Workshops, Seminaren</b> oder <b>Fotoshootings</b>.
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