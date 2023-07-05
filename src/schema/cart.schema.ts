import * as mongoose from 'mongoose';
import { CartItem, CartItemDocument } from '../interfaces/cart.interface';

const CartItemSchema = new mongoose.Schema<CartItemDocument>({
  userId: { type: String, required: true },
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
});

export const CartItemModel = mongoose.model<CartItemDocument>(
  'CartItem',
  CartItemSchema,
);

export { CartItem, CartItemSchema };
