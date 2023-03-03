import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorEntity } from './entities/author.entity';

@Controller('authors')
@ApiTags('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiCreatedResponse({type: AuthorEntity})
  create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  @ApiOkResponse({type: AuthorEntity, isArray: true})
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: AuthorEntity})
  async findOne(@Param('id',ParseIntPipe) id: number) {
    const author = this.authorsService.findOne(id);
    if (!author){
      throw new NotFoundException(`Author with ${id} was not found.`);
    }
    return author;
  }

  @Patch(':id')
  @ApiOkResponse({type: AuthorEntity})
  async update(@Param('id',ParseIntPipe) id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
    const author = this.authorsService.update(id, updateAuthorDto);
    if (!author){
      throw new NotFoundException(`Author with ${id} failed to update.`);
    }
    return author;
  }

  @Delete(':id')
  @ApiOkResponse({type: AuthorEntity})
  async remove(@Param('id',ParseIntPipe) id: number) {
    const author = this.authorsService.remove(id);
    if (!author){
      throw new NotFoundException(`Author with ${id} failed to be deleted.`);
    }
    return author;
  }
}
