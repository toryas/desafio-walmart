import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../models/product.model';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) { }

    async findProducts(serchBy: `byd` | `id`, value: string): Promise<Product[]> {
        let query;
        if (serchBy === `byd`) {
            query = { $or: [{ brand: new RegExp(value) }, { description: new RegExp(value) }] }
        } else {
            query = { id: value }
        }
        return this.productModel.find(query).exec();
    }
}
