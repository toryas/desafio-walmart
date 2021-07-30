import { Controller, Get, Param } from '@nestjs/common';
import { ByDSearchDTO } from '../dtos/byd-search.dto';
import { IdSearchDTO } from '../dtos/id-search.dto';
import { OffererService } from '../services/offerer.service';
import { ProductsService } from '../services/products.service';

@Controller('products')
export class ProductsController {

    constructor(private ofs: OffererService) { }

    @Get('byd/:value')
    async getOfferByByD(@Param() params: ByDSearchDTO) {
        const { value } = params;
        return this.ofs.palindromeOffer(`byd`, value);
    }

    @Get('id/:value')
    async getOfferById(@Param() params: IdSearchDTO) {
        const { value } = params;
        return this.ofs.palindromeOffer(`id`, value);
    }

}
