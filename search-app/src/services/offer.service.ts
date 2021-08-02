import { Product } from "../domain/product";
import { IProduct } from "../interfaces/product.interface";

export const getOffer = async (searchBy: string, value: string) => {
    const REACT_APP_OFFER_HOST = process.env.REACT_APP_OFFER_HOST || `http://localhost`
    const REACT_APP_OFFER_PORT = process.env.REACT_APP_OFFER_PORT || 3000
    const url = `${REACT_APP_OFFER_HOST}:${REACT_APP_OFFER_PORT}/products/${searchBy}/${value}`
    let result: IProduct[] = await (await fetch(url)).json();
    return result.map((product) => new Product(product));
}