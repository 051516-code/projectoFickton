import { Injectable } from '@nestjs/common';
import { CreateBiometricDto } from './dto/create-biometric.dto';



@Injectable()
export class BiometricService {

  private readonly dataPulse : CreateBiometricDto[] = []; //TODO: variable donde guardaremos los datos de las pulseras


  create(data: CreateBiometricDto) {
    this.dataPulse.push(data) // TODO: guardamos los datos recibidos en el array
    return 
  }

  findAll() {
    return this.dataPulse
  }


}



// para el raspBerry pi
// :python --version
// pip install requests



// import requests
// import random
// import time

// url = "http://<YOUR_NESTJS_BACKEND_URL>/biometric"

// # Lista de pulseras (puedes expandir esto)
// devices = ['pulsera_a', 'pulsera_b', 'pulsera_c']

// while True:
//     for device in devices:
//         # Simular la lectura de datos biométricos
//         pressure = random.randint(90, 140)  # Simulando presión
//         heart_rate = random.randint(60, 100)  # Simulando frecuencia cardíaca

//         # Crear un diccionario con los datos
//         data = {
//             "deviceId": device,  # ID de la pulsera
//             "pressure": pressure,
//             "heartRate": heart_rate
//         }

//         # Enviar los datos al backend
//         response = requests.post(url, json=data)

//         # Imprimir la respuesta del servidor
//         print(f'Device {device}:', response.json())

//     # Esperar un tiempo antes de enviar el siguiente conjunto de datos
//     time.sleep(5)  # Espera 5 segundos
