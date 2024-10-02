import { Controller, Get, Post, Body, HttpServer } from '@nestjs/common';
import { BiometricService } from './biometric.service';
import { CreateBiometricDto } from './dto/create-biometric.dto';
import { lastValueFrom } from 'rxjs';

@Controller('biometric')
export class BiometricController {

  constructor(
    private readonly biometricService: BiometricService,
    private readonly httpService: HttpServer
  ) {}


  @Get('request-data')
  async requestDataFromRaspberry() {
      const raspberryPiUrl = 'http://<Raspberry_PI_IP>:5000/get-biometric-data';  // Reemplaza con la IP de tu Raspberry Pi
      const response = await lastValueFrom(this.httpService.get(raspberryPiUrl));
      return response.data;  // Retorna los datos recibidos de la Raspberry Pi
  }

  @Post()
  create(@Body() createBiometricDto: CreateBiometricDto) {
    return this.biometricService.create(createBiometricDto);
  }

  @Get()
  findAll() {
    return this.biometricService.findAll();
  }

}
