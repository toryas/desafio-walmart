export interface IProduct {
    id: number;
    brand: string;
    description: string;
    image: string;
    price: number;
    offert?: number;
    discount?: number;
}