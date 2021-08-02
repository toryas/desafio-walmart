import { Product } from '../domain/product';
import { getOffer } from './offer.service';

describe('Pruebas unitarias Offer Service', () => {
    it('deberia retornar un objeto Product[]', async () => {
        global.fetch = jest.fn().mockResolvedValue({json:()=>{
            return [{}]
        }})
        const result = await getOffer('id','1');
        result.forEach((item)=>{
            expect(item).toBeInstanceOf(Product);
        });
    });
});