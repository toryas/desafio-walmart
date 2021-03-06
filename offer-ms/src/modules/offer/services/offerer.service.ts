import { Injectable } from '@nestjs/common';
import { isPalindrome } from '../../../shared/utils/common.util';
import { ProductsService } from './products.service';

@Injectable()
export class OffererService {
    constructor(private readonly productService: ProductsService) { }

    async palindromeOffer(searchBy: 'byd' | 'id', value: string) {
        let products = await this.productService.findProducts(searchBy, value);
        if (isPalindrome(value)) {
            for (let product of products) {
                (product as any).offert = (product.price * 50) / 100;
                product.discount = 50;
            }
        }
        return products
    }
}
