import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '../models/product.model';
import { OffererService } from './offerer.service';
import { ProductsService } from './products.service';

describe('OffererService', () => {
  let service: OffererService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffererService,
        {
          provide: ProductsService, useValue: {
            findProducts: () => {
              let product = new Product()
              product.price = 100;
              return Promise.resolve([product])
            }
          }
        }
      ],
    }).compile();

    service = module.get<OffererService>(OffererService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should apply discount to products obtained after sending a palindrome', async () => {
    const products = await service.palindromeOffer('byd', 'adda');
    products.forEach((product) => {
      expect(product.discount).toBeTruthy();
    })
  });

  it('should don`t apply discount to products obtained after sending a palindrome', async () => {
    const products = await service.palindromeOffer('byd', 'adq');
    products.forEach((product) => {
      expect(product.discount).toBeFalsy();
    })
  });
});
