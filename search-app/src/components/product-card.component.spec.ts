import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { IProduct } from '../interfaces/product.interface';
import { ProductCardComponent } from './produc-card.component'

describe('', () => {

    it('', () => {
        const product: IProduct = {
            id:1,
            brand:"",
            description:"",
            image:"",
            price:12,
        }
        const wrapper = render(ProductCardComponent(product))
        console.log(wrapper)
    });

});