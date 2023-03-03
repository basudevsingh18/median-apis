import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
  } from 'class-validator';

export class CreateAuthorDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @ApiProperty()
    surname: string;

}
