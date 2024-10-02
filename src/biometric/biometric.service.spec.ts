import { Test, TestingModule } from '@nestjs/testing';
import { BiometricService } from './biometric.service';

describe('BiometricService', () => {
  let service: BiometricService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiometricService],
    }).compile();

    service = module.get<BiometricService>(BiometricService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
