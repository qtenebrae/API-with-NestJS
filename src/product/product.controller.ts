import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { ProductModel } from './product.model/product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
	@Post('create')
	async create(@Body() dto: Omit<ProductModel, '_id'>): Promise<void> {
		return null;
	}

	@Get(':id')
	async get(@Param('id') id: string): Promise<void> {
		return null;
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		return null;
	}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel): Promise<void> {
		return null;
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDto): Promise<void> {
		return null;
	}
}
