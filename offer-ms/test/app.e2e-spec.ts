import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getModelToken } from '@nestjs/mongoose';
import { OfferModule } from './../src/modules/offer/offer.module';
import { Product } from './../src/modules/offer/models/product.model';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let findMock;
  beforeEach(async () => {
    let product: Product = {
      id: 1,
      brand: "some brand",
      description: "some description",
      image: "",
      price: 100
    }
    findMock = jest.fn(() => ({
      exec: () => {
        return [product]
      }
    }));
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [OfferModule],
    })
      .overrideProvider(getModelToken(Product.name))
      .useValue({ find: findMock })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should get a product with discount and offert, search by id', () => {
    return request(app.getHttpServer())
      .get('/products/id/121')
      .expect(200)
      .expect(({ body }) => {
        body.forEach((element: Product) => {
          expect(element.discount).toBeDefined();
          expect(element.offert).toBeDefined();
        });
      });
  });
  it('should get a product without  discount and offert, search by id', () => {
    return request(app.getHttpServer())
      .get('/products/id/1')
      .expect(200)
      .expect(({ body }) => {
        body.forEach((element: Product) => {
          expect(element.discount).toBeUndefined();
          expect(element.offert).toBeUndefined();
        });
      });
  });
  it('should get a product with discount and offert, search by byd', () => {
    return request(app.getHttpServer())
      .get('/products/byd/asa')
      .expect(200)
      .expect(({ body }) => {
        body.forEach((element: Product) => {
          expect(element.discount).toBeDefined();
          expect(element.offert).toBeDefined();
        });
      });
  });
  it('should get a product without  discount and offert, search by byd', () => {
    return request(app.getHttpServer())
      .get('/products/byd/asd')
      .expect(200)
      .expect(({ body }) => {
        body.forEach((element: Product) => {
          expect(element.discount).toBeUndefined();
          expect(element.offert).toBeUndefined();
        });
      });
  });

});
