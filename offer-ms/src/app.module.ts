import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OfferModule } from './modules/offer/offer.module';

const {
  MONGO_USR,
  MONGO_PSW,
  MONGO_HOST,
  MONGO_COLLECTION
} = process.env
@Module({
  imports: [
    OfferModule,
    MongooseModule.forRoot(`mongodb://productListUser:productListPassword@localhost:27017/admin`, {
      dbName:`promotions`
    })
  ]
})
export class AppModule { }
