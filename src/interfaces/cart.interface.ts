import mongoose from 'mongoose';
import { Product } from './product.interface';

export interface CartItem {
  userId: string;
  productId: string;
  quantity: number;
  product?: Product;
}

export type CartItemDocument = CartItem & mongoose.Document;
