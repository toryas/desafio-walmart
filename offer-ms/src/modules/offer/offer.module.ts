import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './controllers/products.controller';
import { Product, ProductSchema } from './models/product.model';
import { ProductsService } from './services/products.service';
import { OffererService } from './services/offerer.service';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Product.name,
    schema: ProductSchema
  }])],
  controllers: [ProductsController],
  providers: [
    ProductsService,
    OffererService,
  ]
})
export class OfferModule { }
