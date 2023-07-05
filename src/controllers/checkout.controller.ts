import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { Checkout } from '../interfaces/checkout.interface';
import { CheckoutService } from '../services/checkout.service';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get(':userId')
  async getCheckoutByUserId(
    @Param('userId') userId: string,
  ): Promise<Checkout[]> {
    return await this.checkoutService.getCheckoutByUserId(userId);
  }

  @Post(':userId')
  async createCheckout(
    @Param('userId') userId: string,
    @Body() checkout: Checkout,
  ): Promise<Checkout> {
    return await this.checkoutService.createCheckout(userId, checkout);
  }

  @Delete(':userId/:id')
  async deleteCheckout(
    @Param('userId') userId: string,
    @Param('id') id: string,
  ): Promise<Checkout> {
    try {
      return await this.checkoutService.deleteCheckout(userId, id);
    } catch (error) {
      throw new NotFoundException('Checkout not found');
    }
  }

  @Put(':userId/:id')
  async updateCheckout(
    @Param('userId') userId: string,
    @Param('id') id: string,
    @Body() checkout: Checkout,
  ): Promise<Checkout> {
    try {
      return await this.checkoutService.updateCheckout(userId, id, checkout);
    } catch (error) {
      throw new NotFoundException('Checkout not found');
    }
  }
}
