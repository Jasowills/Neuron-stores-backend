import {
  Controller,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  Get,
} from '@nestjs/common';
import { CartService } from '../services/cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId/items')
  addToCart(@Param('userId') userId: string, @Body() body: any) {
    const { productId, quantity } = body;
    return this.cartService.addToCart(userId, productId, quantity);
  }

  @Patch('items/:cartItemId')
  updateCartItemQuantity(
    @Param('cartItemId') cartItemId: string,
    @Body() body: any,
  ) {
    const { quantity } = body;
    return this.cartService.updateCartItemQuantity(cartItemId, quantity);
  }

  @Delete('items/:cartItemId')
  removeFromCart(@Param('cartItemId') cartItemId: string) {
    return this.cartService.removeFromCart(cartItemId);
  }

  @Get(':userId/items')
  getCartItems(@Param('userId') userId: string) {
    return this.cartService.getCartItems(userId);
  }
}
