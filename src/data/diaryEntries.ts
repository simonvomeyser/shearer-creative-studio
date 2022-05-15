
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

export const diaryEntries: DiaryEntryType[] = require('./diaryEntriesData.js');

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