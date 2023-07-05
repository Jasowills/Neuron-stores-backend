import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartController } from '../controllers/cart.controller';
import { CartService } from '../services/cart.service';
import { CartItemSchema } from '../schema/cart.schema';
import { ProductService } from '../services/product.service'; // Import ProductService
import { ProductSchema } from '../schema/product.schema'; // Import ProductModel

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CartItem', schema: CartItemSchema },
      { name: 'Product', schema: ProductSchema },
    ]),
  ],
  controllers: [CartController],
  providers: [CartService, ProductService], // Add ProductModel as a provider
})
export class CartModule {}
