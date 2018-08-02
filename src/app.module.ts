import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { ProfileController } from './controllers/ProfileController';
import { CategoriesController } from './controllers/categories.controller';
import { CorsMiddleware } from './controllers/Cors';
import * as mongoose from 'mongoose';
import { ItemsController } from './controllers/items.controller';

mongoose.connect('mongodb://localhost/local');
@Module({
  imports: [],
  controllers: [
      ProfileController,
      CategoriesController,
      ItemsController
  ],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
      consumer.apply(CorsMiddleware).forRoutes( { path: '*', method: RequestMethod.ALL }, );
  }
}
