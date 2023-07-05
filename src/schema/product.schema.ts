import * as mongoose from 'mongoose';
import { Product } from '../interfaces/product.interface';

export type ProductDocument = Product & mongoose.Document;

const ProductSchema = new mongoose.Schema<ProductDocument>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

export const ProductModel = mongoose.model<ProductDocument>(
  'Product',
  ProductSchema,
);
export { Product, ProductSchema };
