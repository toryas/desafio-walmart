import { IsNotEmpty, Length } from 'class-validator';

export class ByDSearchDTO {

    @IsNotEmpty()
    @Length(3)
    value: string;
}