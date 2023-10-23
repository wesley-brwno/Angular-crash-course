import { RatingRepresntaion } from "./rating-representation"

export interface ProductRepresentation {
    id?: number,
    title?: string,
    price?: number,
    description?: string,
    category?: string,
    image?: string,
    rating?: RatingRepresntaion
}

