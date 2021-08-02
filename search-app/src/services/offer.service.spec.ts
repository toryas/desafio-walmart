import { Product } from '../domain/product';
import { getOffer } from './offer.service';

describe('Pruebas unitarias Offer Service', () => {
    let fetchMock: any;
    beforeEach(() => {
        // fetchMock = jest.fn().mockResolvedValue({
        //     json: () => {
        //         return [{}]
        //     }
        // })
        fetchMock = jest.fn(() => (
            Promise.resolve({
                json: () => [{}]
            })
        ));
        global.fetch = fetchMock;

    })
    it('deberia retornar un objeto Product[]', async () => {
        const result = await getOffer('1');
        result.forEach((item) => {
            expect(item).toBeInstanceOf(Product);
        });
    });
    it('deberia api debe ser invocado con parametro id', async () => {
        await getOffer('1');
        let urlArr = fetchMock.mock.calls[0][0].split('/');
        expect(urlArr[urlArr.length - 2]).toBe('id')
    });
    it('deberia api debe ser invocado con parametro byd', async () => {
        await getOffer('asd');
        let urlArr = fetchMock.mock.calls[0][0].split('/');
        expect(urlArr[urlArr.length - 2]).toBe('byd')
    });

});