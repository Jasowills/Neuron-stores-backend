import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CheckoutController } from '../controllers/checkout.controller';
import { CheckoutService } from '../services/checkout.service';
import { CheckoutSchema } from '../schema/checkout.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Checkout', schema: CheckoutSchema }]),
  ],
  controllers: [CheckoutController],
  providers: [CheckoutService],
})
export class CheckoutModule {}
