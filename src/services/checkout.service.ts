import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Checkout } from '../interfaces/checkout.interface';

@Injectable()
export class CheckoutService {
  constructor(
    @InjectModel('Checkout') private readonly checkoutModel: Model<Checkout>,
  ) {}

  async getCheckoutByUserId(userId: string): Promise<Checkout[]> {
    return await this.checkoutModel.find({ userId }).exec();
  }

  async createCheckout(userId: string, checkout: Checkout): Promise<Checkout> {
    const createdCheckout = new this.checkoutModel({ userId, ...checkout });
    return await createdCheckout.save();
  }

  async deleteCheckout(userId: string, id: string): Promise<Checkout> {
    const deletedCheckout = await this.checkoutModel.findOneAndRemove({
      _id: id,
      userId,
    });

    if (!deletedCheckout) {
      throw new NotFoundException('Checkout not found');
    }

    return deletedCheckout;
  }

  async updateCheckout(
    userId: string,
    id: string,
    checkout: Checkout,
  ): Promise<Checkout> {
    const updatedCheckout = await this.checkoutModel.findOneAndUpdate(
      { _id: id, userId },
      checkout,
      { new: true },
    );

    if (!updatedCheckout) {
      throw new NotFoundException('Checkout not found');
    }

    return updatedCheckout;
  }
}
