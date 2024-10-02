import { Module } from '@nestjs/common';
import { BiometricService } from './biometric.service';
import { BiometricController } from './biometric.controller';
import { HttpModule } from '@nestjs/axios';  // Importa HttpModule

@Module({
  imports: [HttpModule],
  controllers: [BiometricController],
  providers: [BiometricService],
})
export class BiometricModule {}
