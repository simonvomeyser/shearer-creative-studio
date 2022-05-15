export type DiaryEntryType = {
    slug: string,
    folder: string,
    id: number,
    title: string,
    category: string,
    excerpt: string,
    body: string,
    featured?: number,
    date?: string,
    listImageUrl: string,
    titleImageUrl: string,
    imageUrls: string[],
}

export const diaryEntries: DiaryEntryType[] = [
    {
        id: 6,
        slug: 'before-and-after',
        folder: '6-before-and-after',
        title: 'Before and After',
        excerpt: 'Semper pharetra augue rhoncus sociosqu aptent libero metus ',
        date: 'Mai 2022',
        category: 'Salonalltag',
        body: `
            Fringilla platea feugiat vel lectus orci lacinia mollis nec auctor, pulvinar mattis nibh <br/> <br> adipiscing arcu sagittis parturient urna sit consequat, vivamus finibus class tincidunt commodo efficitur nisl euismod. Ultrices porttitor risus orci pellentesque morbi eget mattis egestas accumsan, nam quisque proin dis sem nec vitae sapien dui, consequat praesent sit augue interdum maximus nullam sollicitudin. Sagittis nisi integer dignissim pellentesque suspendisse sit taciti consequat cras in donec eget himenaeos nisl, torquent neque fames curae nullam massa commodo interdum ligula magna condimentum porttitor. Massa pulvinar purus tortor convallis montes varius volutpat arcu tincidunt, sodales consectetur velit fusce integer at ad est senectus ligula, nibh justo quam scelerisque vehicula quis quisque malesuada. Feugiat molestie mattis sollicitudin scelerisque ridiculus litora laoreet orci, suspendisse eleifend commodo iaculis sociosqu sed porttitor. Proin parturient netus quis posuere cubilia est aenean, interdum laoreet malesuada lorem accumsan. Fringilla fermentum cursus molestie sit vulputate taciti eu magna, pellentesque lacinia netus quis etiam facilisi.
        `,
        listImageUrl: 'tamara.jpg',
        titleImageUrl: 'tamara.jpg',
        imageUrls: [
            'tamara.jpg',
            'kiki.jpg',
            'frauke.jpg',
            'skylar.jpg',
            'tamara.jpg',
        ],
    },
    {
        id: 5,
        slug: 'produktvorstellung-davines-oi-liquid-luster',
        folder: '5-produktvorstellung-davines-oi-liquid-luster',
        title: 'Produkt im Fokus: Davines OI Liquid Luster',
        excerpt: 'Dürfen wir vorstellen: das neue Starprodukt OI LIQUID LUSTER für einen perfekten, schwerelosen Glanz, um die Haare im Handumdrehen zum Strahlen zu bringen.',
        date: 'Mai 2022',
        category: 'Produktvorstellung',
        body: `
        Eine flüssige Textur, reich an Feuchtigkeit spendenden Wirkstoffen,
        die sich an der Haarfaser anlagert und die Haaroberfläche verfeinert. <br><br>
        OI Liquid Luster verbessert die Haarqualität, gibt ihm eine unglaublich
        gesunde und weiche Anmutung und begünstigt Kämmbarkeit,
        Trocknung und Styling. Das Haar fühlt sich extrem geschmeidig an
        und erhält einen außergewöhnlich strahlenden Glanz.<br><br>
        DAS HAAR WIRD 6 MAL GLÄNZENDER - 3,5 <strong>MAL SEIDIGER - EXTREM GESCHMEIDIG</strong><br><br>
        OI-Produkte werden mit Energie aus 100% erneuerbaren Ressourcen hergestellt und in der Produktion anfallendes CO₂ kompensiert. Die Verpackung besteht aus wiederverwertetem Kunststoff und ist recycelbar. Das bei der Herstellung der Verpackung anfallende CO₂ wird durchden Schutz und die Aufforstung eines Naturschutzgebietes in Äthiopien ausgeglichen.
        `,
        listImageUrl: '1.jpeg',
        titleImageUrl: '1.jpeg',
        imageUrls: [
            '1.jpeg',
            '2.jpeg',
            '3.jpeg',
        ],
    },
    {
        id: 4,
        slug: 'vortrag-stylecom-messe-2019',
        folder: '4-vortrag-stylecom-messe-2019',
        title: 'Vortrag Stylecom Messe 2019',
        excerpt: 'Auf der Stylecom Messe in Erfurt durfte Sarah einen Vortrag über Make-Up halten',
        featured: 4,
        date: 'Oktober 2019',
        category: 'Events',
        body: `
        6.800 begeisterte Stylingfans und Experten verwandelten die Messehalle Erfurt in ein pinkes Paradies rund um die facettenreichen Themen Styling, Frisur, Beauty und Make-Up.<br><br> Das abwechslungsreiche Programm, die Stars zum Anfassen und jede Menge Möglichkeiten zum Austauschen und Informieren machten aus der Premieren-Ausgabe der Style-Com einen vollen Erfolg - wie man auf dieser Seite sehen kann.
        `,
        listImageUrl: 'hug.jpg',
        titleImageUrl: 'title.jpeg',
        imageUrls: [
            'group.jpg',
            'hug.jpg',
            'programm.jpeg',
            'sc-4180.jpeg',
            'sc-4191.jpeg',
            'sc-4199.jpeg',
            'stage-1.jpg',
            'stage-2.jpg',
            'stage-3.jpg',
        ],
    },
    {
        id: 3,
        title: 'H-MAG Herbst/Winter Kollektion 2020',
        slug: 'h-mag-herbstwinter-kollektion-2020',
        folder: '3-h-mag-herbstwinter-kollektion-2020',
        date: 'Oktober 2020',
        category: 'Produktion',
        featured: 2,
        excerpt: 'Mitarbeit an der Trendkollektionen des Zentralverbandes des Deutschen Friseurhandwerks',
        body: 'Das H|MAG – HAIR MAGAZINE präsentiert die aktuellen Trendkollektionen des <strong>Zentralverbandes des Deutschen Friseurhandwerks</strong>. <br> <br> Die Trendkollektionen erscheinen zweimal jährlich und 2020 durfte Sarah gemeinsam mit dem Modeteam des ZV Friseurhandwerks die aktuellen Trends für die deutsche Friseurbranche erarbeiten. <br><br> Die tollen Ergebnisse siehst du hier oder auf der <a href="https://www.friseurhandwerk.de/hmag/das-team.html" target="_blank">Webseite des Magazins</a>',
        listImageUrl: '1.jpg',
        titleImageUrl: 'title.jpg',
        imageUrls: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            'team.jpeg',
        ],
    },
    {
        id: 2,
        slug: 'ghda-nominierte-kollektion-2019-maniac',
        folder: '2-ghda-nominierte-kollektion-2019-maniac',
        title: 'GHDA Nominierte Kollektion 2019 "Maniac"',
        featured: 3,
        date: 'Juni 2019',
        category: 'Award',
        excerpt: 'Die für den German Hair Dressing Award nominierte Strecke "Maniac"',
        body: 'Lectus pellentesque vitae dapibus urna nibh cubilia quisque sodales nullam gravida, porta a turpis placerat aliquam mus montes donec laoreet. Fermentum porttitor nulla efficitur aenean luctus himenaeos inceptos, dui elit taciti viverra pellentesque. Primis cursus mollis ante at dapibus blandit commodo praesent, morbi volutpat vivamus parturient cubilia quis. <br><br>' +
            'Enim scelerisque rutrum nam malesuada euismod nisi ad auctor mattis, quisque dolor pharetra orci suscipit potenti sagittis rhoncus, ipsum nisl ornare commodo primis dictum fusce ut. Elementum taciti pellentesque erat posuere himenaeos cubilia libero rhoncus ante proin ad, mi sagittis eleifend dignissim non scelerisque felis viverra morbi maximus.',
        listImageUrl: '_DSC9373_A4.jpg',
        titleImageUrl: '_DSC9373_A4.jpg',
        imageUrls: [
            '_DSC9233_A4.jpg',
            '_DSC9152_A4.jpg',
            '_DSC9373_A4.jpg',
            '_DSC9328_A4.jpg',
        ],
    },
    {
        id: 1,
        slug: 'gewinner-kollektion-german-hair-dressing-award-2017',
        folder: '1-gewinner-kollektion-german-hair-dressing-award-2017',
        date: 'Juni 2017',
        category: 'Award',
        featured: 1,
        title: 'GHDA 2017 Gewinner Kollektion',
        excerpt: 'Die Gewinnerkollektion "Insomina" für den German Hairdressing Award 2017 als Newcomer',
        body: 'Der German Hairdressing Award - Ouff. Quasi der \"Oscar der Friseure\". <br><br> ' +
            'Dieser Award zeichnet über alle Grenzen hinweg die Besten der Besten der Friseurbranche aus, schon die Nominierung kommt einem Ritterschlag gleich. <br>' +
            'Im Juni 2017 war es dann soweit, als Sarah, damals als kleiner Grünschnabel frisch in der Branche, auch noch einen der vielbegehrten Awards in der Kategorie "Newcomer" nach Hause holte. Ein unvergesslicher Abend und der Beginn einer Reise die noch nicht auserzählt ist.',
        listImageUrl: 'Larahighres.jpg',
        titleImageUrl: '19400309_1372991149450350_50137453373403212_o.jpg',
        imageUrls: [
            'Ophelia-highres.jpg',
            'Larahighres.jpg',
            'Peachyhighres.jpg',
            'Tanjahighres.jpg',
            '19400309_1372991149450350_50137453373403212_o.jpg',
            '2017-06-18 21.42.04.jpg',
            '2017-06-18 21.41.58.jpg',
        ],
    },
];

export const featuredDiaryEntries = (() => {
    const filtered = diaryEntries.filter((e) => e.featured)
        .sort((a,b) => {

            if(!b.featured || !a.featured) {
                return 0
            }
            if (b.featured > a.featured) {
                   return 1
            }
            if (b.featured < a.featured) {
                   return -1;
            }
            return 0;

    });
    if (filtered.length > 2) {
       return  filtered;
    }
    return diaryEntries;
})();