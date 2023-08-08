import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { TopPageModel } from './top-page.model/top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() dto: Omit<TopPageModel, '_id'>): Promise<void> {
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
	async patch(@Param('id') id: string, @Body() dto: TopPageModel): Promise<void> {
		return null;
	}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindTopPageDto): Promise<void> {
		return null;
	}
}
