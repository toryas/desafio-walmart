import { Test, TestingModule } from '@nestjs/testing';
import { OffererService } from './offerer.service';

describe('OffererService', () => {
  let service: OffererService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffererService],
    }).compile();

    service = module.get<OffererService>(OffererService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
