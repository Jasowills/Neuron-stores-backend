// ProductService

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schema/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async getProductsByCategory(category: string): Promise<Product[]> {
    return this.productModel.find({ category }).exec();
  }

  async getProductById(productId: string): Promise<Product> {
    return this.productModel.findById(productId).exec();
  }

  async getProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async createProduct(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async deleteProduct(productId: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(productId).exec();
  }

  async updateProduct(productId: string, product: Product): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(productId, product, { new: true })
      .exec();
  }
}
