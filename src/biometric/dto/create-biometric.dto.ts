import { IsNumber, IsString } from "class-validator"

export class CreateBiometricDto {

@IsString()
deviceId: String; // TODO: id de la pulsera    

@IsNumber()
pressure : number;

@IsNumber()
heartRate : number;
}
