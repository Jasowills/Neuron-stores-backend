import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartItem, CartItemDocument } from '../interfaces/cart.interface';
import { ProductService } from './product.service';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('CartItem')
    private readonly cartItemModel: Model<CartItemDocument>,
    private readonly productService: ProductService,
  ) {}

  async addToCart(
    userId: string,
    productId: string,
    quantity: number,
  ): Promise<CartItem> {
    const product = await this.productService.getProductById(productId);
    if (!product) {
      throw new Error(`Product with ID ${productId} not found.`);
    }

    const cartItem = new this.cartItemModel({
      userId,
      productId,
      quantity,
    });

    return cartItem.save();
  }

  async removeFromCart(cartItemId: string): Promise<void> {
    await this.cartItemModel.findByIdAndDelete(cartItemId).exec();
  }

  async updateCartItemQuantity(
    cartItemId: string,
    quantity: number,
  ): Promise<CartItem> {
    const cartItem = await this.cartItemModel.findById(cartItemId).exec();
    if (!cartItem) {
      throw new Error(`Cart item with ID ${cartItemId} not found.`);
    }

    cartItem.quantity = quantity;
    return cartItem.save();
  }

  async getCartItems(userId: string): Promise<CartItem[]> {
    return this.cartItemModel.find({ userId }).exec();
  }
}
