export interface IProduct {
    id: number
    name: string
    price: number
}

export interface IProductRequest {
    name: string
    price: number
}

// interface IProductResponse {
//     message: string
//     data: IProduct[]
// }