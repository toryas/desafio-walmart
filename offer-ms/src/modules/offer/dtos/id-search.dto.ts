import { IsNotEmpty, IsNumberString } from 'class-validator';

export class IdSearchDTO {

    @IsNotEmpty()
    @IsNumberString()
    value: string;
}