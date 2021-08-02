import { IProduct } from "../interfaces/product.interface";

export class Product implements IProduct {
    id: number;
    brand: string;
    description: string;
    image: string;
    price: number;
    offert?: number | undefined;
    discount?: number | undefined;

    constructor(product: IProduct) {
        this.id = product.id;
        this.brand = product.brand;
        this.description = product.description;
        this.image = product.image;
        this.price = product.price;
        this.offert = product.offert;
        this.discount = product.discount;
    }

}