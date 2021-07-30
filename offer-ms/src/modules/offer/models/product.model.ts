import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {

  @Prop()
  id: number;

  @Prop()
  brand: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  offert?: number;

  @Prop()
  discount?: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);