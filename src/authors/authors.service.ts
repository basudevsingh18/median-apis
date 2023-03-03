import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {

    constructor(private prisma: PrismaService) {}

  create(createAuthorDto: CreateAuthorDto) {
    return this.prisma.authors.create({data: createAuthorDto})
  }

  findAll() {
    return this.prisma.authors.findMany();
  }

  findOne(id: number) {
    return this.prisma.authors.findUnique({ where: {id} });
  }

  update(id: number, updateAuthorDto: UpdateAuthorDto) {
    return this.prisma.authors.update(
      {
        where: {id},
        data: updateAuthorDto
      }
    )
  }

  remove(id: number) {
    return this.prisma.authors.delete({where: {id} });
}
}