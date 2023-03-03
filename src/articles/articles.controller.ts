import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({type: ArticleEntity})
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({type: ArticleEntity, isArray: true})
  findAll() {
    return this.articlesService.findAll();
  }

  //New Route
  @Get('drafts')
  @ApiOkResponse({type: ArticleEntity, isArray: true})
  findDrafts() {
    return  this.articlesService.findDrafts();
  }

  @Get(':id')
  @ApiOkResponse({type: ArticleEntity})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException(`Article with ${id} does not exist.`);
    }
    return article;
  }

  @Patch(':id')
  @ApiOkResponse({type: ArticleEntity})
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateArticleDto: UpdateArticleDto) {
    const article = await this.articlesService.update(id, updateArticleDto);
    if (!article) {
      throw new NotFoundException(`Article with ${id} failed to update.`);
    }
    return article;
  }

  @Delete(':id')
  @ApiOkResponse({type: ArticleEntity})
  async remove(@Param('id', ParseIntPipe) id: number) {
    const article = this.articlesService.remove(id);
    if (!article) {
      throw new NotFoundException(`Article with ${id} failed to be deleted.`);
    }
    return article;
  }
}
