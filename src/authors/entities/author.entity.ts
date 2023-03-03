import { Authors } from ".prisma/client";
import { ApiProperty } from '@nestjs/swagger';

export class AuthorEntity implements Authors {

    @ApiProperty()
    id: number;
  
    @ApiProperty()
    firstName: string;
  
    @ApiProperty()
    surname: string;
  
    @ApiProperty()
    createdAt: Date;
  
    @ApiProperty()
    updatedAt: Date;
}
