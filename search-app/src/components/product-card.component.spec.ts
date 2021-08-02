import '@testing-library/jest-dom'
import { IProduct } from '../interfaces/product.interface';
import { ProductCardComponent } from './produc-card.component'
import { mount } from 'enzyme'

describe('Pruebas unitarias ProductCardComponent', () => {

    it('Debe mostrar div offer div, cuando el producto tiene atributo offer', async () => {
        const product: IProduct = {
            id: 1,
            brand: "asd",
            description: "",
            image: "",
            price: 12,
            offert:6,
            discount:50
        }
        const wrapper = mount(ProductCardComponent(product))
        let offerDiv = await wrapper.find('#offer-div')
        expect(offerDiv.length).toBe(1)
    });

    it('No debe mostrar div offer div, cuando el producto no tiene atributo offer', async () => {
        const product: IProduct = {
            id: 1,
            brand: "asd",
            description: "",
            image: "",
            price: 12
        }
        const wrapper = mount(ProductCardComponent(product))
        let offerDiv = await wrapper.find('#offer-div')
        expect(offerDiv.length).toBe(0)
    });



});