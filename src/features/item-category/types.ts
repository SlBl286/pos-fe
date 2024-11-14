export type ItemCategories= {
    items: ItemCategory[],
}
export type ItemCategoriesPaged= {
    items: ItemCategory[],
    total: number,
    pageCount: number,
    pageIndex: number
}
export type ItemCategory= {
    id : string,
    code: string,
    name: string,
    description? : string,
    updatedAt : Date,
    createdAt : Date,
}
