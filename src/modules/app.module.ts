import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user.module';
import config from '../config/key';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ProductModule } from './product.module';
import { CartModule } from './cart.module';
import { CheckoutModule } from './checkout.module';
@Module({
  imports: [
    UserModule,
    ProductModule,
    CartModule,
    CheckoutModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
