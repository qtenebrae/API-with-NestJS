import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
} from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
import { REVIEW_NOT_FOUND } from './review.constants';
import { DocumentType } from '@typegoose/typegoose/lib/types';
import { ReviewModel } from './review.model/review.model';

@Controller('review')
export class ReviewController {
	constructor(private readonly reviewService: ReviewService) {}

	@Post('create')
	async create(@Body() dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
		return this.reviewService.create(dto);
	}

	@Delete(':id')
	async delete(@Param('id') id: string): Promise<void> {
		const deletedDoc = await this.reviewService.delete(id);
		if (!deletedDoc) {
			throw new HttpException(REVIEW_NOT_FOUND, HttpStatus.NOT_FOUND);
		}
	}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string): Promise<DocumentType<ReviewModel>[]> {
		return this.reviewService.findByProductId(productId);
	}
}
