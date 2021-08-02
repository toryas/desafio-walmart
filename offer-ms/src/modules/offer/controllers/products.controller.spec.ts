import { Test, TestingModule } from '@nestjs/testing';
import { OffererService } from '../services/offerer.service';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
  let controller: ProductsController;
  let palindromeOfferMock;

  beforeEach(async () => {
    palindromeOfferMock = jest.fn();
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: OffererService, useValue: {
            palindromeOffer: palindromeOfferMock
          }
        }
      ]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call palindromeOffer with byd params', async ()=>{
    controller.getOfferByByD({value:""});
    expect(palindromeOfferMock).toBeCalledWith('byd',"")
  });

  it('should call palindromeOffer with id params', async ()=>{
    controller.getOfferById({value:""});
    expect(palindromeOfferMock).toBeCalledWith('id',"")
  });
});
