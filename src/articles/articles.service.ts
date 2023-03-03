import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  
  create(createArticleDto: CreateArticleDto) {
    // return 'This action adds a new article';
    return this.prisma.article.create({data: createArticleDto});
  }

  findAll() {
    // return `This action returns all articles`;
    return this.prisma.article.findMany({ where: { published: true } });
  }

  //New Route
  findDrafts() {
    return this.prisma.article.findMany({ where: {published : false} });
  }

  findOne(id: number) {
    // return `This action returns a #${id} article`;
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    return this.prisma.article.update(
      {
        where: {id},
        data: updateArticleDto,
      }
    );


  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    return this.prisma.article.delete({ where: {id} });
  }
}
