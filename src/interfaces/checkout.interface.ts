import { Document } from 'mongoose';

export interface Checkout extends Document {
  userId: string;
  deliveryAddress: string;
  region: string;
  city: string;
  paymentMethod: string;
  phoneNumber: number;
  deliveryType: string;
}
