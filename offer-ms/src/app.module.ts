import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferModule } from './modules/offer/offer.module';

const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST
} = process.env
@Module({
  imports: [
    OfferModule,
    MongooseModule.forRoot(`mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${process.env.MONGO_PORT??27017}/admin`, {
      dbName:`promotions`
    })
  ]
})
export class AppModule { }
