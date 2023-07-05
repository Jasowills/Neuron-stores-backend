import { Schema, model, Model } from 'mongoose';
import { Checkout } from '../interfaces/checkout.interface';

export const CheckoutSchema: Schema = new Schema({
  userId: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  region: { type: String, required: true },
  city: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  deliveryType: { type: String, required: true },
});

export const CheckoutModel: Model<Checkout> = model<Checkout>(
  'Checkout',
  CheckoutSchema,
);
