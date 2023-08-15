import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { ProductModel } from './product.model/product.model';

@Module({
	controllers: [ProductController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ProductModel,
				schemaOptions: {
					collection: 'Product',
				},
			},
		]),
	],
})
export class ProductModule {}
