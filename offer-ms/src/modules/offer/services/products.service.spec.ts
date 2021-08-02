import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../models/product.model';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;
  let findSpy;

  beforeEach(async () => {
    findSpy = jest.fn(() => ({ exec: () => { } }));
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService,
        {
          provide: getModelToken(Product.name), useValue: {
            find: findSpy
          }
        }
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`should be find products with id arguments`, async () => {
    const value = '1';
    const searchBy = 'id';
    await service.findProducts(searchBy, value);
    expect(findSpy).toHaveBeenCalledWith({ id: '1' })
  });
  
  it(`should be find products with byd arguments`, async () => {
    const value = '1';
    const searchBy = 'byd';
    await service.findProducts(searchBy, value);
    expect(findSpy).toHaveBeenCalledWith({ $or: [{ brand: new RegExp(value) }, { description: new RegExp(value) }] })
  });
});
