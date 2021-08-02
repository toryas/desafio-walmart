import { Product } from "../domain/product";
import { IProduct } from "../interfaces/product.interface";

export const getOffer = async (value: string) => {
    const searchBy = isNaN(Number(value)) ? 'byd' : 'id';
    const API_ENDPOINT = process.env.API_ENDPOINT || `http://localhost:3001`
    const url = `${API_ENDPOINT}/products/${searchBy}/${value}`
    let result: IProduct[] = await (await fetch(url)).json();
    return result.map((product) => new Product(product));
}