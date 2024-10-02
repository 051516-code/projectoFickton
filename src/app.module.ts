import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BiometricModule } from './biometric/biometric.module';

@Module({
  imports: [BiometricModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
