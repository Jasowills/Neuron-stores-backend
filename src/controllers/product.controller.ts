// ProductController

import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product.interface';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get(':category')
  async getProductsByCategory(
    @Param('category') category: string,
  ): Promise<Product[]> {
    return this.productService.getProductsByCategory(category);
  }

  @Get('/product/:id')
  async getProductById(@Param('id') productId: string): Promise<Product> {
    return this.productService.getProductById(productId);
  }

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Post()
  async createProduct(@Body() product: Product): Promise<Product> {
    return this.productService.createProduct(product);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') productId: string): Promise<Product> {
    return this.productService.deleteProduct(productId);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') productId: string,
    @Body() product: Product,
  ): Promise<Product> {
    return this.productService.updateProduct(productId, product);
  }
}
