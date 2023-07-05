import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../services/product.service';
import { ProductSchema, ProductModel } from '../schema/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductModel],
})
export class ProductModule {}
